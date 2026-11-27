import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { calculateEventBudget } from "@/lib/event-budget";

const FIELDS = [
  { key: "guests", label: "Number of guests", step: "1" },
  { key: "foodPerGuest", label: "Food and beverage per guest (LKR)", step: "1" },
  { key: "venue", label: "Venue hire (LKR)", step: "1" },
  { key: "av", label: "Stage, sound, lighting and LED (LKR)", step: "1" },
  { key: "decor", label: "Decor and branding (LKR)", step: "1" },
  { key: "entertainment", label: "Entertainment and MC (LKR)", step: "1" },
  { key: "photo", label: "Photography and video (LKR)", step: "1" },
  { key: "other", label: "Transport, permits and other (LKR)", step: "1" },
  { key: "management", label: "Planning and management fee (LKR)", step: "1" },
  { key: "contingency", label: "Contingency (%)", step: "0.1" },
] as const;

type FieldKey = (typeof FIELDS)[number]["key"];
type Values = Record<FieldKey, string>;

const FIXED_KEYS = ["venue", "av", "decor", "entertainment", "photo", "other", "management"] as const;
const initialValues = (): Values => ({
  guests: "",
  foodPerGuest: "",
  venue: "",
  av: "",
  decor: "",
  entertainment: "",
  photo: "",
  other: "",
  management: "",
  contingency: "10",
});

const numberValue = (value: string) => {
  if (!value.trim()) return 0;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
};

const currency = (value: number) => `LKR ${new Intl.NumberFormat("en-LK", { maximumFractionDigits: 0 }).format(value)}`;

export function EventBudgetCalculator() {
  const [values, setValues] = useState<Values>(initialValues);
  const fixedTotal = FIXED_KEYS.reduce((sum, key) => sum + numberValue(values[key]), 0);
  const result = calculateEventBudget({
    guests: numberValue(values.guests),
    foodPerGuest: numberValue(values.foodPerGuest),
    fixedTotal,
    contingencyPercent: numberValue(values.contingency),
  });
  const results = [
    ["Food total", currency(result.foodTotal)],
    ["Fixed costs total", currency(result.fixedTotal)],
    ["Subtotal", currency(result.subtotal)],
    ["Contingency amount", currency(result.contingency)],
    ["Total estimated budget", currency(result.total)],
    ["Cost per guest", result.costPerGuest === null ? "–" : currency(result.costPerGuest)],
  ];

  return (
    <section aria-labelledby="event-budget-calculator-title" className="my-8 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 id="event-budget-calculator-title" className="text-xl font-bold text-foreground">Estimate your event budget</h2>
          <p className="mt-1 text-sm text-muted-foreground">Enter your own supplier figures. The totals update as you type.</p>
        </div>
        <button type="button" onClick={() => setValues(initialValues())} className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted">
          <RotateCcw className="h-4 w-4" /> Reset
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <label key={field.key} className="block text-sm font-semibold text-foreground">
            {field.label}
            <input
              type="number"
              min="0"
              step={field.step}
              inputMode="decimal"
              value={values[field.key]}
              onChange={(event) => setValues((current) => ({ ...current, [field.key]: event.target.value }))}
              className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 font-normal text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder={field.key === "contingency" ? "10" : "0"}
            />
          </label>
        ))}
      </div>

      <div aria-live="polite" className="mt-6 overflow-hidden rounded-xl border border-border bg-muted/50">
        <dl>
          {results.map(([label, value], index) => (
            <div key={label} className={`flex items-center justify-between gap-4 px-4 py-3 text-sm ${index > 0 ? "border-t border-border" : ""} ${index === 4 ? "bg-primary text-primary-foreground" : ""}`}>
              <dt className={index === 4 ? "font-bold" : "text-muted-foreground"}>{label}</dt>
              <dd className={`text-right font-semibold ${index === 4 ? "text-lg" : "text-foreground"}`}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Estimates only. Use real supplier quotes for accurate figures.</p>
    </section>
  );
}
