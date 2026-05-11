import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/360-marketing-sri-lanka")({
  beforeLoad: () => {
    throw redirect({ to: "/360-marketing-campaigns-sri-lanka", statusCode: 301 });
  },
});
