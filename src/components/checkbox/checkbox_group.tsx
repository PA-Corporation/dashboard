import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";

type valueChange = {
  onValueChange: (value: string) => void;
};

const styles = {
  label: ["text-color-white"],
};
const stylesGroup = {
  label: ["text-color-white/50"],
};

const GroupCheckbox: React.FC<valueChange> = ({ onValueChange }) => {
  const [selected, setSelected] = useState<string>("");

  const handleChange = (value: string[]) => {
    if (value.length > 0) {
      const latestValue = value[value.length - 1];
      setSelected(latestValue);
      onValueChange(latestValue);
    } else {
      setSelected("");
      onValueChange("");
    }
  };

  return (
    <CheckboxGroup
      label="Select one Category:"
      orientation="horizontal"
      value={selected ? [selected] : []}
      onChange={handleChange}
      size="md"
      classNames={stylesGroup}
    >
      <Checkbox value={"Test"} size="md" classNames={styles}>
        Test
      </Checkbox>
      <Checkbox value={"Supplies"} size="md" classNames={styles}>
        Supplies
      </Checkbox>
      <Checkbox value={"Final"} size="md" classNames={styles}>
        Final
      </Checkbox>
    </CheckboxGroup>
  );
};

export default GroupCheckbox;
