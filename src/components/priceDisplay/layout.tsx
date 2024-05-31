import React from "react";
import useFormattedPrice from "@/hooks/useFormattedPrice";

interface PriceDisplayProps {
  amount: number;
  currency: "USD" | "COP";
  color: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  amount,
  currency,
  color,
}) => {
  const formattedPrice = useFormattedPrice(amount, currency);

  return <p style={{ color: color }}>{formattedPrice}</p>;
};

export default PriceDisplay;
