import * as React from "react";
import type { ErrorRouteComponent, ErrorComponentProps } from "@tanstack/react-router";

// 1: props typed as ErrorComponentProps
export const A: ErrorRouteComponent = ({ error, reset }: ErrorComponentProps) => {
  void error; void reset;
  return React.createElement("div", null, "a");
};

// 2: lazy
export const B: ErrorRouteComponent = React.lazy(() =>
  Promise.resolve({ default: () => React.createElement("div", null, "b") }),
);

// 3: our current shape
export const C: ErrorRouteComponent = ({ error, reset }: { error: Error; reset: () => void }) => {
  void error; void reset;
  return React.createElement("div", null, "c");
};
