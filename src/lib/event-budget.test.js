import { describe, expect, test } from "bun:test";
import { calculateEventBudget } from "./event-budget";

describe("event budget calculator", () => {
  test("matches the supplied 200-guest example with a 10% contingency", () => {
    const result = calculateEventBudget({
      guests: 200,
      foodPerGuest: 5_000,
      fixedTotal: 1_500_000,
      contingencyPercent: 10,
    });

    expect(result.foodTotal).toBe(1_000_000);
    expect(result.subtotal).toBe(2_500_000);
    expect(result.contingency).toBe(250_000);
    expect(result.total).toBe(2_750_000);
    expect(result.costPerGuest).toBe(13_750);
  });

  test("does not divide by zero when the guest count is empty", () => {
    const result = calculateEventBudget({ guests: 0, foodPerGuest: 5_000, fixedTotal: 100_000, contingencyPercent: 10 });
    expect(result.total).toBe(110_000);
    expect(result.costPerGuest).toBeNull();
  });
});
