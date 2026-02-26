import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Dog, User, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Review {
  id: string;
  reviewer_name: string;
  reviewer_type: string;
  dog_name: string | null;
  rating: number;
  review_text: string;
  created_at: string;
}

const StarRating = ({ rating, onRate, interactive = false }: { rating: number; onRate?: (r: number) => void; interactive?: boolean }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-5 h-5 transition-colors ${star <= rating ? "fill-primary text-primary" : "text-muted-foreground/30"} ${interactive ? "cursor-pointer hover:text-primary" : ""}`}
        onClick={() => interactive && onRate?.(star)}
      />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: Review }) => (
  <Card className="shadow-soft">
    <CardContent className="pt-6">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-semibold text-foreground">{review.reviewer_name}</p>
          {review.dog_name && <p className="text-sm text-muted-foreground">🐕 {review.dog_name}</p>}
        </div>
        <StarRating rating={review.rating} />
      </div>
      <p className="text-muted-foreground leading-relaxed">{review.review_text}</p>
    </CardContent>
  </Card>
);

const ReviewForm = ({ type, onSubmitted }: { type: "owner" | "dog"; onSubmitted: () => void }) => {
  const [name, setName] = useState("");
  const [dogName, setDogName] = useState("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !rating || !text.trim()) {
      toast.error("Please fill in all required fields and select a rating.");
      return;
    }
    if (name.length > 100 || text.length > 1000 || dogName.length > 100) {
      toast.error("Input exceeds maximum length.");
      return;
    }

    setLoading(true);
    try {
      const res = await supabase.functions.invoke("send-review-email", {
        body: {
          reviewer_name: name.trim(),
          reviewer_type: type,
          dog_name: dogName.trim() || null,
          rating,
          review_text: text.trim(),
        },
      });

      if (res.error) throw res.error;

      toast.success("Review submitted! Thank you! 🐾");
      setName("");
      setDogName("");
      setRating(0);
      setText("");
      onSubmitted();
    } catch {
      toast.error("Failed to submit review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder={type === "owner" ? "Your name" : "Your dog's name"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={100}
        required
      />
      {type === "owner" && (
        <Input
          placeholder="Dog's name (optional)"
          value={dogName}
          onChange={(e) => setDogName(e.target.value)}
          maxLength={100}
        />
      )}
      <div>
        <p className="text-sm text-muted-foreground mb-2">Rating *</p>
        <StarRating rating={rating} onRate={setRating} interactive />
      </div>
      <Textarea
        placeholder={type === "owner" ? "Share your experience..." : "What does your pup think? 🐶"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={1000}
        required
      />
      <Button type="submit" variant="hero" disabled={loading} className="w-full">
        <Send className="w-4 h-4 mr-2" />
        {loading ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
};

const Reviews = () => {
  const [ownerReviews, setOwnerReviews] = useState<Review[]>([]);
  const [dogReviews, setDogReviews] = useState<Review[]>([]);

  const fetchReviews = async () => {
    const { data } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setOwnerReviews(data.filter((r: Review) => r.reviewer_type === "owner"));
      setDogReviews(data.filter((r: Review) => r.reviewer_type === "dog"));
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            What They're <span className="text-primary">Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our happy owners and their four-legged adventurers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Owner Reviews */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground">Owner Reviews</h3>
            </div>
            <div className="space-y-4 mb-8">
              {ownerReviews.length > 0 ? (
                ownerReviews.map((r) => <ReviewCard key={r.id} review={r} />)
              ) : (
                <p className="text-muted-foreground italic">No owner reviews yet — be the first!</p>
              )}
            </div>
            <Card className="shadow-soft border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg font-display">Leave a Review</CardTitle>
              </CardHeader>
              <CardContent>
                <ReviewForm type="owner" onSubmitted={fetchReviews} />
              </CardContent>
            </Card>
          </div>

          {/* Dog Reviews */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <Dog className="w-5 h-5 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground">Dog Reviews</h3>
            </div>
            <div className="space-y-4 mb-8">
              {dogReviews.length > 0 ? (
                dogReviews.map((r) => <ReviewCard key={r.id} review={r} />)
              ) : (
                <p className="text-muted-foreground italic">No dog reviews yet — let your pup speak! 🐾</p>
              )}
            </div>
            <Card className="shadow-soft border-secondary/20">
              <CardHeader>
                <CardTitle className="text-lg font-display">Leave a Dog Review 🐶</CardTitle>
              </CardHeader>
              <CardContent>
                <ReviewForm type="dog" onSubmitted={fetchReviews} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
