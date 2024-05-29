import React, { useEffect, useState } from "react";
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
import { useWorkspaceStore } from "@/stores/workspaceStore";
import styles from "./styles.module.css";

interface DropDownProps {
  onOpen?: () => void;
}

const DropDown: React.FC<DropDownProps> = ({ onOpen }) => {
  const selectWorkspace = useWorkspaceStore((state) => state.selectWorkspace);
  const { selectedWorkspace } = useWorkspaceStore();

  const [store, setStore] = useState([
    {
      name: "Select a workspace",
      items: [],
    },
    {
      name: "Create a New workspace",
      items: [
        {
          id: "Add",
          label: "Add New",
          description: "Create Workspace",
          icon: IconPlusCircle,
          action: onOpen,
        },
      ],
    },
  ]);

  useEffect(() => {
    // Simulando la consulta a la base de datos
    const fetchWorkspaces = async () => {
      const fetchedItems = [
        {
          id: "VA",
          label: "Valkyrie Army",
          description: "Core workspace",
          action: () =>
            selectWorkspace({
              id: "VA",
              label: "Valkyrie Army",
              description: "Core workspace",
            }),
        },
        {
          id: "Flame",
          label: "Flame Candel",
          description: "Core workspace",
          action: () =>
            selectWorkspace({
              id: "Flame",
              label: "Flame Candel",
              description: "Core workspace",
            }),
        },
      ];

      setStore((prevStore) => [
        { ...prevStore[0], items: fetchedItems },
        prevStore[1],
      ]);
    };

    fetchWorkspaces();
  }, [selectWorkspace]);

  return (
    <Dropdown className={styles["drop-menu"]} backdrop="blur">
      <DropdownTrigger>
        <Button
          variant="solid"
          className={styles["btn"]}
          endContent={<IconSelect />}
        >
          <div className={styles["content-text"]}>
            <h2>
              {selectedWorkspace ? selectedWorkspace.label : "Select Store"}
            </h2>
            <p className="subtitle">Core workspace</p>
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={store}>
        {store?.map((section, index) => (
          <DropdownSection
            key={section.name}
            title={section.name}
            items={section.items}
            showDivider={index === store.length - 1 ? false : true}
          >
            {section.items.map((item) => (
              <DropdownItem
                key={item.id}
                description={item.description}
                onPress={item.action}
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
};

export default DropDown;
