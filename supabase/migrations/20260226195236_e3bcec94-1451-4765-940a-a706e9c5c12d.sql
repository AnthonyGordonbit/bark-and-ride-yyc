
-- Create reviews table
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  reviewer_name TEXT NOT NULL,
  reviewer_type TEXT NOT NULL CHECK (reviewer_type IN ('owner', 'dog')),
  dog_name TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read reviews
CREATE POLICY "Anyone can read reviews"
  ON public.reviews
  FOR SELECT
  USING (true);

-- Allow anyone to insert reviews (public form)
CREATE POLICY "Anyone can submit reviews"
  ON public.reviews
  FOR INSERT
  WITH CHECK (true);
