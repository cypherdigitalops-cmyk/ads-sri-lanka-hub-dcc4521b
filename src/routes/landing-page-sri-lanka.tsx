import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/landing-page-sri-lanka")({
  beforeLoad: () => {
    throw redirect({ to: "/landing-page-design-sri-lanka", statusCode: 301 });
  },
});
