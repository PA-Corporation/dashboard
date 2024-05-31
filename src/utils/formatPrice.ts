export const formatPrice = (
  amount: number,
  currency: "USD" | "COP"
): string => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
};
