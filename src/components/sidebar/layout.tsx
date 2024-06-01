"use client";

import { Section } from "@/types";
import { Badge, Button, useDisclosure } from "@nextui-org/react";
import IconHome from "@/public/icons/icon-home";
import IconPuzzle from "@/public/icons/puzzle-piece";
import IconSquare from "@/public/icons/square-plus";
import IconChart from "@/public/icons/chart-square";
import IconTeam from "@/public/icons/user-group";
import IconTruck from "@/public/icons/truck";
import IconBills from "@/public/icons/bills";
import IconStore from "@/public/icons/store";
import IconBell from "@/public/icons/bell";
import Button01 from "../button01/layout";
import DropDown from "../dropdown/layout";
import ModalCreate from "../modals/createWorkspace";
import UserComponent from "../userClerk/layout";
import NotificationBar from "../notificationBar/layout";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";

const sections: Section[] = [
  { name: "Home", href: "/", icon: IconHome },
  { name: "Products", href: "/products", icon: IconPuzzle },
  { name: "Supplies", href: "/supplies", icon: IconSquare },
  { name: "Sales", href: "/sales", icon: IconBills },
  { name: "Customers", href: "/customers", icon: IconStore },
  { name: "Analytics", href: "/analytics", icon: IconChart },
  { name: "Team", href: "/team", icon: IconTeam },
  { name: "Tracker", href: "/tracker", icon: IconTruck },
];

function Sidebar() {
  const path = usePathname();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <aside className={styles["container"]}>
      <section className={styles["section-container"]}>
        <div className={styles["title-panel"]}>
          <h2>Dashboard</h2>
          <Badge
            size="md"
            color="danger"
            content={5}
            isInvisible={false}
            shape="circle"
            showOutline={false}
          >
            <Button
              size="sm"
              isIconOnly
              radius="full"
              variant="solid"
              aria-label="notification"
              className={styles["icon-bell"]}
            >
              <IconBell />
            </Button>
          </Badge>
        </div>
        <DropDown onOpen={onOpen} />
        <ModalCreate isOpen={isOpen} onOpenChange={onOpenChange} />
        <nav className={styles["nav"]}>
          {sections.map((section, index) => (
            <Button01 key={index} data={section} path={path} />
          ))}
        </nav>
        <NotificationBar />
        <UserComponent />
      </section>
    </aside>
  );
}

export default Sidebar;
