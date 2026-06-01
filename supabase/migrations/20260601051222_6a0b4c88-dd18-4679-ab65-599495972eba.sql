CREATE TABLE public.cta_clicks (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  cta text NOT NULL,
  page_url text,
  referrer text,
  user_agent text,
  meta jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_cta_clicks_created_at ON public.cta_clicks (created_at DESC);
CREATE INDEX idx_cta_clicks_cta ON public.cta_clicks (cta);
CREATE INDEX idx_cta_clicks_page_url ON public.cta_clicks (page_url);

GRANT INSERT ON public.cta_clicks TO anon;
GRANT INSERT, SELECT ON public.cta_clicks TO authenticated;
GRANT ALL ON public.cta_clicks TO service_role;

ALTER TABLE public.cta_clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can log a click (anon)"
  ON public.cta_clicks FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Anyone can log a click (auth)"
  ON public.cta_clicks FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Admins can view clicks"
  ON public.cta_clicks FOR SELECT TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));
