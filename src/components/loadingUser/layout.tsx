import { Progress } from "@nextui-org/react";
import React from "react";

export default function LoadingUser() {
  return (
    <Progress
      size="sm"
      isIndeterminate
      aria-label="Loading..."
      className="max-w-md"
    />
  );
}
