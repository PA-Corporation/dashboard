"use client";

import { useState } from "react";
import { Input } from "@nextui-org/react";

const styles = {
  label: [
    "!text-color-white/60",
    "group-data-[hover=true]:!text-color-black",
    "group-data-[focus=true]:!text-color-black",
  ],
  input: [
    "!text-color-white",
    "placeholder:text-color-white",
    "focus:!text-color-black",
    "group-data-[hover=true]:!text-color-black",
  ],
  innerWrapper: [
    "bg-transparent",
    "text-color-white",
    "group-data-[focus=true]:!text-color-black",
    "group-data-[hover=true]:!text-color-black",
  ],
  inputWrapper: [
    "shadow-md",
    "bg-color-primary",
    "group-data-[focus=true]:bg-color-white",
    "group-data-[hover=true]:text-color-black",
    "group-data-[hover=true]:bg-color-white",
    "!cursor-text",
  ],
};

export default function InputSearch() {
  const [value, setValue] = useState("");

  return (
    <Input
      label="Search"
      isClearable
      radius="md"
      size="lg"
      classNames={styles}
      placeholder="Type to search..."
      description="Type any name to search for products in your store."
      value={value}
      onValueChange={setValue}
    />
  );
}
