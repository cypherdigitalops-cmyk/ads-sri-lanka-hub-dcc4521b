export type EventBudgetCalculation = {
  foodTotal: number;
  fixedTotal: number;
  subtotal: number;
  contingency: number;
  total: number;
  costPerGuest: number | null;
};

export function calculateEventBudget(input: {
  guests: number;
  foodPerGuest: number;
  fixedTotal: number;
  contingencyPercent: number;
}): EventBudgetCalculation {
  const clean = (value: number) => (Number.isFinite(value) ? Math.max(0, value) : 0);
  const guests = clean(input.guests);
  const foodTotal = guests * clean(input.foodPerGuest);
  const fixedTotal = clean(input.fixedTotal);
  const subtotal = foodTotal + fixedTotal;
  const contingency = subtotal * clean(input.contingencyPercent) / 100;
  const total = subtotal + contingency;

  return {
    foodTotal,
    fixedTotal,
    subtotal,
    contingency,
    total,
    costPerGuest: guests > 0 ? total / guests : null,
  };
}
