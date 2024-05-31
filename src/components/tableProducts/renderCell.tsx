import React from "react";
import { Chip, ChipProps, Tooltip } from "@nextui-org/react";
import Trash from "@/public/icons/trash";
import PencilSquare from "@/public/icons/pencil-square";
import { Products } from "@/types";
import PriceDisplay from "../priceDisplay/layout";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "warning",
  out: "danger",
};

const renderCell = (product: Products, columnKey: React.Key) => {
  const cellValue = product[columnKey as keyof Products];

  switch (columnKey) {
    case "name":
      return <p>{cellValue}</p>;
    case "category":
      return <p>{cellValue}</p>;
    case "cost":
      return typeof cellValue === "number" ? (
        <PriceDisplay
          amount={cellValue}
          currency={"USD"}
          color={`var(--color-danger)`}
        />
      ) : (
        <p>Invalid amount</p>
      );
    case "price":
      return typeof cellValue === "number" ? (
        <PriceDisplay
          amount={cellValue}
          currency={"USD"}
          color={`var(--color-success)`}
        />
      ) : (
        <p>Invalid amount</p>
      );
    case "revenue":
      if (
        typeof product.price === "number" &&
        typeof product.cost === "number"
      ) {
        const revenue = product.price - product.cost;
        return <PriceDisplay amount={revenue} currency="USD" color={"white"} />;
      } else {
        return <p>Invalid data for revenue calculation</p>;
      }
    case "revenuePercentage":
      if (
        typeof product.price === "number" &&
        typeof product.cost === "number" &&
        product.cost !== 0
      ) {
        const profit = product.price - product.cost;
        const revenuePercentage = (profit / product.cost) * 100;
        return (
          <p style={{ color: `var(--color-alert)` }}>
            {revenuePercentage.toFixed(2)}%
          </p>
        );
      } else {
        return <p>Invalid data for percentage calculation</p>;
      }

    case "date":
      return <p>{cellValue}</p>;
    case "quantity":
      return <p>{cellValue}</p>;
    case "status":
      return (
        <Chip
          className="capitalize border-none gap-1 text-color-white"
          color={statusColorMap[product.status]}
          size="sm"
          variant="dot"
        >
          {cellValue}
        </Chip>
      );
    case "actions":
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Edit" color="primary">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <PencilSquare color="white" size={20} />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Delete product">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <Trash color="#f31260" size={20} />
            </span>
          </Tooltip>
        </div>
      );
    default:
      return cellValue;
  }
};

export default renderCell;
