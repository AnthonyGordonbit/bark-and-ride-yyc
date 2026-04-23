-- Add approved flag to reviews
ALTER TABLE public.reviews
  ADD COLUMN IF NOT EXISTS approved BOOLEAN NOT NULL DEFAULT false;

CREATE INDEX IF NOT EXISTS idx_reviews_approved_created
  ON public.reviews (approved, created_at DESC);

-- Replace public SELECT policy: only approved reviews with 4 or 5 stars are publicly visible
DROP POLICY IF EXISTS "Anyone can read reviews" ON public.reviews;

CREATE POLICY "Public can read approved high-rated reviews"
ON public.reviews
FOR SELECT
TO public
USING (approved = true AND rating >= 4);
