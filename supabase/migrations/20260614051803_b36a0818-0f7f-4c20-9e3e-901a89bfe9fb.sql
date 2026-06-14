DROP POLICY IF EXISTS "Anyone can log a click (anon)" ON public.cta_clicks;
DROP POLICY IF EXISTS "Anyone can log a click (auth)" ON public.cta_clicks;

CREATE POLICY "Anyone can log a click (anon)" ON public.cta_clicks
  FOR INSERT TO anon
  WITH CHECK (
    cta = ANY (ARRAY['whatsapp'::text, 'call'::text, 'quote'::text, 'email'::text, 'apply_job'::text])
    AND length(COALESCE(page_url, ''::text)) <= 2048
    AND length(COALESCE(referrer, ''::text)) <= 2048
    AND length(COALESCE(user_agent, ''::text)) <= 500
  );

CREATE POLICY "Anyone can log a click (auth)" ON public.cta_clicks
  FOR INSERT TO authenticated
  WITH CHECK (
    cta = ANY (ARRAY['whatsapp'::text, 'call'::text, 'quote'::text, 'email'::text, 'apply_job'::text])
    AND length(COALESCE(page_url, ''::text)) <= 2048
    AND length(COALESCE(referrer, ''::text)) <= 2048
    AND length(COALESCE(user_agent, ''::text)) <= 500
  );