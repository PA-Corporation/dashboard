import React, { useState } from "react";
import { Textarea } from "@nextui-org/react";

type Input = {
  type?: string | undefined;
  label?: string;
  placeholder?: string;
  radius?: "sm" | "md" | "lg" | "full" | "none";
  size?: "sm" | "md" | "lg";
  description?: string;
  required?: boolean;
  value?: any;
  onValueChange: (value: string) => void;
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
    "bg-color-white/80",
    "backdrop-blur-xl",
    "backdrop-saturate-200",
    "hover:!bg-color-white",
    "focus-within:!bg-color-white",
    "!cursor-text",
  ],
};

const InputTextare: React.FC<Input> = ({
  label,
  placeholder,
  radius = "sm",
  size = "md",
  description,
  required,
  onValueChange,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onValueChange(event.target.value);
  };

  return (
    <Textarea
      label={label ? label : "Description"}
      radius={radius}
      size={size}
      placeholder={placeholder ? placeholder : "Enter your description"}
      description={description ? description : false}
      classNames={styles}
      value={value}
      onChange={handleChange}
      isRequired={required ? required : false}
    />
  );
};

export default InputTextare;
