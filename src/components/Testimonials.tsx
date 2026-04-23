import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, User, Dog } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Review {
  id: string;
  reviewer_name: string;
  reviewer_type: string;
  dog_name: string | null;
  rating: number;
  review_text: string;
  created_at: string;
}

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        className={`w-4 h-4 ${s <= rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
      />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: Review }) => (
  <Card className="shadow-soft h-full">
    <CardContent className="pt-6 flex flex-col h-full">
      <Stars rating={review.rating} />
      <p className="text-muted-foreground leading-relaxed mt-3 flex-1">
        "{review.review_text}"
      </p>
      <div className="mt-4 pt-4 border-t border-border">
        <p className="font-semibold text-foreground">{review.reviewer_name}</p>
        {review.dog_name && (
          <p className="text-sm text-muted-foreground">🐕 {review.dog_name}</p>
        )}
      </div>
    </CardContent>
  </Card>
);

const Column = ({
  title,
  icon,
  iconBg,
  reviews,
  emptyText,
}: {
  title: string;
  icon: React.ReactNode;
  iconBg: string;
  reviews: Review[];
  emptyText: string;
}) => (
  <div>
    <div className="flex items-center gap-3 mb-6">
      <div className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center`}>
        {icon}
      </div>
      <h3 className="text-2xl font-display font-semibold text-foreground">{title}</h3>
    </div>
    {reviews.length === 0 ? (
      <Card className="shadow-soft">
        <CardContent className="pt-6">
          <p className="text-muted-foreground text-center py-8">{emptyText}</p>
        </CardContent>
      </Card>
    ) : (
      <div className="grid gap-4">
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
    )}
  </div>
);

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("reviews")
        .select("id, reviewer_name, reviewer_type, dog_name, rating, review_text, created_at")
        .order("created_at", { ascending: false })
        .limit(20);
      setReviews(data ?? []);
      setLoading(false);
    };
    load();
  }, []);

  if (loading) return null;
  if (reviews.length === 0) return null;

  const owner = reviews.filter((r) => r.reviewer_type === "owner");
  const dog = reviews.filter((r) => r.reviewer_type === "dog");

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            What They're <span className="text-primary">Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real words from happy owners and their pups 🐾
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <Column
            title="Owner Reviews"
            icon={<User className="w-5 h-5 text-primary-foreground" />}
            iconBg="bg-primary"
            reviews={owner}
            emptyText="No owner reviews yet — be the first!"
          />
          <Column
            title="Dog Reviews"
            icon={<Dog className="w-5 h-5 text-secondary-foreground" />}
            iconBg="bg-secondary"
            reviews={dog}
            emptyText="No dog reviews yet — bark away!"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;