DROP POLICY IF EXISTS "Anyone can insert page views" ON public.page_views;

CREATE POLICY "Anyone can insert page views"
ON public.page_views
FOR INSERT
TO anon, authenticated
WITH CHECK (
  (page_url IS NULL OR length(page_url) <= 500)
  AND (page_path IS NULL OR length(page_path) <= 300)
  AND (referrer IS NULL OR length(referrer) <= 500)
  AND (user_agent IS NULL OR length(user_agent) <= 500)
);