/**
 * Formats a number as USD currency, e.g. 1299 -> "$1,299.00", 1299.5 -> "$1,299.50".
 * Centralized so every price on the site (cards, detail page, cart) renders identically.
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
