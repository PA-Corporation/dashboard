import React from "react";
import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <main className="clerk">
      <Spinner size="lg" />
    </main>
  );
}
