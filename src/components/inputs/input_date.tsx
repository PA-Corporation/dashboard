import React, { useState } from "react";
import { DateInput, DateValue } from "@nextui-org/react";
import { getLocalTimeZone, today } from "@internationalized/date";

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
    "hover:bg-color-white/80",
    "focus-within:!bg-color-white",
    "!cursor-text",
  ],
};

type InputDateProps = {
  onValueChange: (value: DateValue) => void;
};

const InputDate: React.FC<InputDateProps> = ({ onValueChange }) => {
  const initialDate: any = today(getLocalTimeZone());
  const [value, setValue] = useState<DateValue>(initialDate);

  const handleChange = (value: DateValue) => {
    setValue(value);
    onValueChange(value);
  };

  return (
    <DateInput
      radius="sm"
      label={"Create date"}
      isReadOnly
      hourCycle={24}
      //   ranularity={"minute"}
      classNames={styles}
      value={value}
      onChange={handleChange}
    />
  );
};
export default InputDate;
