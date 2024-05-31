import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import InputSearch from "../inputs/input_search";
import ChevronDown from "@/public/icons/chevron-down";
import PlusCircle from "@/public/icons/plus-circle";
import styles from "./styles.module.css";

const TopContent = ({ statusOptions, statusFilter, setStatusFilter }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row justify-between gap-5">
        <InputSearch />
        <div className="flex flex-row gap-5">
          <Dropdown className={styles["drop-menu"]}>
            <DropdownTrigger>
              <Button
                variant="solid"
                className={styles["btn"]}
                endContent={<ChevronDown size={18} strokeWidth={2} />}
              >
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              closeOnSelect={false}
              selectedKeys={statusFilter}
              selectionMode="multiple"
              onSelectionChange={setStatusFilter}
            >
              {statusOptions.map((status) => (
                <DropdownItem key={status.uid} className="capitalize">
                  {status.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Button
            variant="solid"
            className={styles["btnCreate"]}
            endContent={<PlusCircle strokeWidth={2} />}
          >
            Create Product
          </Button>
        </div>
      </div>
      <span className="text-default-400 text-small">Total {"99"} products</span>
    </div>
  );
};

export default TopContent;
