import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/react";
import IconSelect from "@/public/icons/chevron-up-down";
import IconPlusCircle from "@/public/icons/plus-circle";
import styles from "./styles.module.css";

// Definición de tipos
type Item = {
  key: string;
  label: string;
  description: string;
  icon?: React.ElementType; // opcional
};

type Section = {
  name: string;
  items: Item[];
};

export default function DropDown({ onOpen }: any) {
  const store: Section[] = [
    {
      name: "Select a workspace",
      items: [
        {
          key: "VA",
          label: "Valkyrie Army",
          description: "Core workspace",
        },
        {
          key: "Flame",
          label: "Flame Candel",
          description: "Core workspace",
        },
      ],
    },
    {
      name: "Create a New workspace",
      items: [
        {
          key: "Add",
          label: "Add New",
          description: "Create Workspace",
          icon: IconPlusCircle,
        },
      ],
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
            <h2>{store[0]?.items[1]?.label}</h2>
            <p className="subtitle">Core workspace</p>
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={store}>
        {store.map((section, index) => (
          <DropdownSection
            key={section.name}
            title={section.name}
            items={section.items}
            showDivider={index === store.length - 1 ? false : true}
          >
            {section.items.map((item) => (
              <DropdownItem
                key={item.key}
                description={item.description}
                onPress={onOpen}
                // onPress={() => console.log(`🚀 select: ${item.label}`)}
                endContent={item.icon ? <item.icon /> : null}
              >
                {item.label}
              </DropdownItem>
            ))}
          </DropdownSection>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
