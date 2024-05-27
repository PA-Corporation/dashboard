import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/react";
import IconSelect from "@/public/icons/chevron-up-down";
import styles from "./styles.module.css";

export default function DropDown() {
  const store = [
    {
      key: "VA",
      label: "Valkyrie Army",
    },
    {
      key: "Flame",
      label: "Flame Candel",
    },
  ];

  return (
    <Dropdown className={styles["drop-menu"]} backdrop="blur">
      <DropdownTrigger>
        <Button
          variant="solid"
          className={styles["btn"]}
          endContent={<IconSelect />}
        >
          <div className={styles["content-text"]}>
            <h2>{store[0].label}</h2>
            <p className="subtitle">Core workspace</p>
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={store}>
        {(item) => (
          <DropdownItem
            key={item.key}
            description="Core workspace"
            onPress={() => console.log(`🚀 select: ${item.label}`)}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
