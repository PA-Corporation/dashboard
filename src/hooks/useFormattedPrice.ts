import { formatPrice } from "@/utils/formatPrice";

const useFormattedPrice = (amount: number, currency: "USD" | "COP"): string => {
  return formatPrice(amount, currency);
};

export default useFormattedPrice;
