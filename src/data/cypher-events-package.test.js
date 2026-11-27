import { describe, expect, test } from "bun:test";
import { EVENT_PACKAGE_PAGES } from "./cypher-events-package";

describe("uploaded Cypher Events page package", () => {
  test("contains all 24 unique pages, each with the six supplied FAQs", () => {
    expect(EVENT_PACKAGE_PAGES).toHaveLength(24);
    expect(new Set(EVENT_PACKAGE_PAGES.map((page) => page.path)).size).toBe(24);
    expect(EVENT_PACKAGE_PAGES.filter((page) => page.kind === "blog")).toHaveLength(9);
    expect(EVENT_PACKAGE_PAGES.filter((page) => page.kind === "service")).toHaveLength(15);
    for (const page of EVENT_PACKAGE_PAGES) expect(page.faqs).toHaveLength(6);
  });

  test("keeps the package backlink totals: 14 planning, 8 management and 3 home", () => {
    const links = EVENT_PACKAGE_PAGES.flatMap((page) => [...page.body.matchAll(/\]\((https:\/\/cypherevents\.lk\/[^)]*)\)/g)].map((match) => match[1]));
    expect(links.filter((url) => url === "https://cypherevents.lk/event-planning-sri-lanka")).toHaveLength(14);
    expect(links.filter((url) => url === "https://cypherevents.lk/event-management-sri-lanka/")).toHaveLength(8);
    expect(links.filter((url) => url === "https://cypherevents.lk/")).toHaveLength(3);
  });

  test("does not expose calculator build instructions as page copy", () => {
    const calculator = EVENT_PACKAGE_PAGES.find((page) => page.path === "/event-budget-calculator-sri-lanka");
    expect(calculator?.body).toContain("[[EVENT_BUDGET_CALCULATOR]]");
    for (const page of EVENT_PACKAGE_PAGES) {
      expect(page.body).not.toContain("BUILD INSTRUCTIONS FOR LOVABLE");
      expect(page.body).not.toContain("KEYWORDS FOR THIS PAGE");
    }
  });
});
