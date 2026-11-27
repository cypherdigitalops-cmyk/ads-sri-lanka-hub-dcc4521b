import { describe, expect, test } from "bun:test";
import { CYPHER_EVENTS_BACKLINKS, getEventBacklink } from "./cypher-events-backlinks";

describe("Cypher Events destination selection", () => {
  test("covers the 65 existing pages with the PDF's three destination groups", () => {
    const destinations = Object.values(CYPHER_EVENTS_BACKLINKS).map((entry) => entry.href);
    expect(destinations).toHaveLength(65);
    expect(destinations.filter((url) => url === "https://cypherevents.lk/event-planning-sri-lanka/")).toHaveLength(15);
    expect(destinations.filter((url) => url === "https://cypherevents.lk/event-management-sri-lanka/")).toHaveLength(31);
    expect(destinations.filter((url) => url === "https://cypherevents.lk/")).toHaveLength(19);
  });

  test("preserves the three distinct destinations on the overlapping event pages", () => {
    expect(getEventBacklink("/event-planners-sri-lanka")?.href).toBe("https://cypherevents.lk/event-planning-sri-lanka/");
    expect(getEventBacklink("/event-management-sri-lanka")?.href).toBe("https://cypherevents.lk/event-management-sri-lanka/");
    expect(getEventBacklink("/event-marketing-sri-lanka")?.href).toBe("https://cypherevents.lk/");
  });

  test("normalizes trailing slashes and ignores query strings without assigning links to unrelated pages", () => {
    expect(getEventBacklink("/event-planners-sri-lanka/?source=search#intro")?.href).toBe("https://cypherevents.lk/event-planning-sri-lanka/");
    for (const path of ["/", "/admin", "/login", "/printing-services-sri-lanka", "/seo-services-sri-lanka", "/event-planning-sri-lanka"]) {
      expect(getEventBacklink(path)).toBeUndefined();
    }
  });
});