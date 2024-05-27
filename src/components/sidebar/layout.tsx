"use client";

import { Button, Link } from "@nextui-org/react";
import { Section, SidebarProps } from "@/types";
import styles from "./styles.module.css";
import IconHome from "@/public/icons/icon-home";

const sections: Section[] = [
  {
    name: "Home",
    href: "/",
    icon: IconHome,
  },
  { name: "Products", href: "/products", icon: null },
  { name: "Supplies", href: "/supplies", icon: null },
  { name: "Sales", href: "/sales", icon: null },
  { name: "Customers", href: "/customers", icon: null },
  { name: "Analytics", href: "/analytics", icon: null },
  { name: "Team", href: "/team", icon: null },
  { name: "Tracker", href: "/tracker", icon: null },
];

function Sidebar({ path }: SidebarProps) {
  return (
    <main className={styles["container"]}>
      <section className={styles["section-container"]}>
        <p>Dashboard</p>
        <nav className={styles["nav"]}>
          {sections.map((section, index) => (
            <div key={index}>
              <Button
                key={section.name}
                href={section.href}
                as={Link}
                variant="solid"
                className={`${styles["btn"]} ${
                  path === section.href ? styles["btn-active"] : ""
                }`}
                startContent={
                  section.icon ? <section.icon strokeWidth={2} /> : null
                }
              >
                {section.name}
              </Button>
            </div>
          ))}
        </nav>
        <p>Notification</p>
      </section>
    </main>
  );
}

export default Sidebar;
