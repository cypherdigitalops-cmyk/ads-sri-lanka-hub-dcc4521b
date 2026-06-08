-- Lock down has_role: only used by RLS internally (SECURITY DEFINER bypasses these grants)
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC, anon, authenticated;

-- Tighten always-true INSERT policies with basic input constraints
DROP POLICY IF EXISTS "Anyone can log a click (anon)" ON public.cta_clicks;
DROP POLICY IF EXISTS "Anyone can log a click (auth)" ON public.cta_clicks;
CREATE POLICY "Anyone can log a click (anon)" ON public.cta_clicks
  FOR INSERT TO anon
  WITH CHECK (
    cta IN ('whatsapp','call','quote','email')
    AND length(coalesce(page_url,'')) <= 2048
    AND length(coalesce(referrer,'')) <= 2048
    AND length(coalesce(user_agent,'')) <= 500
  );
CREATE POLICY "Anyone can log a click (auth)" ON public.cta_clicks
  FOR INSERT TO authenticated
  WITH CHECK (
    cta IN ('whatsapp','call','quote','email')
    AND length(coalesce(page_url,'')) <= 2048
    AND length(coalesce(referrer,'')) <= 2048
    AND length(coalesce(user_agent,'')) <= 500
  );

DROP POLICY IF EXISTS "Anyone can submit an inquiry (anon)" ON public.inquiries;
DROP POLICY IF EXISTS "Anyone can submit an inquiry (auth)" ON public.inquiries;
CREATE POLICY "Anyone can submit an inquiry (anon)" ON public.inquiries
  FOR INSERT TO anon
  WITH CHECK (
    length(name) BETWEEN 1 AND 200
    AND length(phone) BETWEEN 1 AND 50
    AND length(coalesce(email,'')) <= 320
    AND length(coalesce(company,'')) <= 200
    AND length(coalesce(service,'')) <= 200
    AND length(coalesce(message,'')) <= 5000
    AND length(coalesce(page_url,'')) <= 2048
    AND length(coalesce(referrer,'')) <= 2048
    AND length(coalesce(user_agent,'')) <= 500
    AND admin_notes IS NULL
  );
CREATE POLICY "Anyone can submit an inquiry (auth)" ON public.inquiries
  FOR INSERT TO authenticated
  WITH CHECK (
    length(name) BETWEEN 1 AND 200
    AND length(phone) BETWEEN 1 AND 50
    AND length(coalesce(email,'')) <= 320
    AND length(coalesce(company,'')) <= 200
    AND length(coalesce(service,'')) <= 200
    AND length(coalesce(message,'')) <= 5000
    AND length(coalesce(page_url,'')) <= 2048
    AND length(coalesce(referrer,'')) <= 2048
    AND length(coalesce(user_agent,'')) <= 500
    AND admin_notes IS NULL
  );