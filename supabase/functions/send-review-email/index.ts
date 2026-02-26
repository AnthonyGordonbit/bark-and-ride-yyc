import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { reviewer_name, reviewer_type, dog_name, rating, review_text } = await req.json();

    // Validate inputs
    if (!reviewer_name || !reviewer_type || !rating || !review_text) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Insert into database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("reviews").insert({
      reviewer_name,
      reviewer_type,
      dog_name,
      rating,
      review_text,
    });

    if (dbError) {
      console.error("DB error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save review" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email notification via Resend (free tier)
    const stars = "⭐".repeat(rating);
    const typeLabel = reviewer_type === "owner" ? "Dog Owner" : "Dog";
    const subject = `New ${typeLabel} Review from ${reviewer_name}${dog_name ? ` (${dog_name})` : ""}`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #f97316;">New Review Submitted!</h2>
        <p><strong>Type:</strong> ${typeLabel} Review</p>
        <p><strong>Reviewer:</strong> ${reviewer_name}</p>
        ${dog_name ? `<p><strong>Dog Name:</strong> ${dog_name}</p>` : ""}
        <p><strong>Rating:</strong> ${stars} (${rating}/5)</p>
        <hr style="border: 1px solid #eee; margin: 16px 0;" />
        <p><strong>Review:</strong></p>
        <p style="background: #f9f9f9; padding: 16px; border-radius: 8px; line-height: 1.6;">${review_text}</p>
        <hr style="border: 1px solid #eee; margin: 16px 0;" />
        <p style="color: #888; font-size: 12px;">This review was submitted via the Bark and Ride YYC website.</p>
      </div>
    `;

    // Use Supabase's built-in SMTP to send via a simple fetch to a mail API
    // We'll use Resend's free API - needs RESEND_API_KEY secret
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (resendApiKey) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Bark and Ride YYC <reviews@resend.dev>",
          to: ["ajgordona@gmail.com"],
          subject,
          html: emailHtml,
        }),
      });

      if (!emailRes.ok) {
        const errBody = await emailRes.text();
        console.error("Email send failed:", errBody);
      }
    } else {
      console.warn("RESEND_API_KEY not set - review saved but email not sent");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
