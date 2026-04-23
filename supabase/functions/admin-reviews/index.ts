import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-admin-password, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const adminPassword = Deno.env.get("ADMIN_REVIEW_PASSWORD");
  if (!adminPassword) {
    return json({ error: "Admin password not configured" }, 500);
  }

  const provided = req.headers.get("x-admin-password") ?? "";
  if (provided !== adminPassword) {
    return json({ error: "Unauthorized" }, 401);
  }

  let payload: { action?: string; id?: string } = {};
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, serviceKey);

  try {
    if (payload.action === "list") {
      const { data, error } = await supabase
        .from("reviews")
        .select("id, reviewer_name, reviewer_type, dog_name, rating, review_text, created_at, approved")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return json({ reviews: data ?? [] });
    }

    if (payload.action === "approve" && payload.id) {
      const { error } = await supabase
        .from("reviews")
        .update({ approved: true })
        .eq("id", payload.id);
      if (error) throw error;
      return json({ success: true });
    }

    if (payload.action === "unapprove" && payload.id) {
      const { error } = await supabase
        .from("reviews")
        .update({ approved: false })
        .eq("id", payload.id);
      if (error) throw error;
      return json({ success: true });
    }

    if (payload.action === "delete" && payload.id) {
      const { error } = await supabase
        .from("reviews")
        .delete()
        .eq("id", payload.id);
      if (error) throw error;
      return json({ success: true });
    }

    return json({ error: "Unknown action" }, 400);
  } catch (err) {
    console.error("admin-reviews error:", err);
    return json({ error: "Server error" }, 500);
  }
});