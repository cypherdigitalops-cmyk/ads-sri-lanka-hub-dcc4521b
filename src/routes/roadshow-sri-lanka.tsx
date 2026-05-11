import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/roadshow-sri-lanka")({
  beforeLoad: () => {
    throw redirect({ to: "/roadshow-marketing-sri-lanka", statusCode: 301 });
  },
});
