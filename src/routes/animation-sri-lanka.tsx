import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/animation-sri-lanka")({
  beforeLoad: () => {
    throw redirect({ to: "/2d-animation-sri-lanka", statusCode: 301 });
  },
});
