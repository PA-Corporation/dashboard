"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/react";
// import styles from "./styles.module.css";

type Input = {
  type?: string | undefined;
  label: string;
  placeholder: string;
  radius?: "sm" | "md" | "lg" | "full" | "none";
  size?: "sm" | "md" | "lg";
  description?: string;
  required?: boolean;
  onValueChange: (value: string) => void;
  disable?: boolean;
  startContent?: string | undefined | any;
};

const styles = {
  label: ["!text-color-black"],
  input: [
    "bg-transparent",
    "text-color-black",
    "placeholder:text-default-700/50",
  ],
  innerWrapper: [
    "bg-transparent",
    "group-data-[focus=true]:text-color-black",
    "group-data-[hover=true]:text-color-black",
  ],
  inputWrapper: [
    "shadow-md",
    "bg-color-white",
    "backdrop-blur-xl",
    "backdrop-saturate-200",
    "hover:!bg-color-white/80",
    "focus-within:!bg-color-white",
    "!cursor-text",
  ],
};

const InputPrimary: React.FC<Input> = ({
  type = undefined,
  label,
  placeholder,
  radius = "sm",
  size = "md",
  description,
  required,
  onValueChange,
  disable = false,
  startContent = undefined,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onValueChange(event.target.value);
  };

  return (
    <Input
      type={type}
      label={label}
      isClearable={false}
      radius={radius}
      size={size}
      classNames={styles}
      placeholder={placeholder ? placeholder : ""}
      description={description ? description : false}
      value={value}
      onChange={handleChange}
      isRequired={required ? required : false}
      isDisabled={disable}
      startContent={startContent}
    />
  );
};

export default InputPrimary;
