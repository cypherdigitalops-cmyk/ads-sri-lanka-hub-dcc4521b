import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tv-commercial-sri-lanka")({
  beforeLoad: () => {
    throw redirect({ to: "/tv-commercials-sri-lanka", statusCode: 301 });
  },
});
