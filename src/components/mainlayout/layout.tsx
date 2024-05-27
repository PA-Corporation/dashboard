"use client";

import { usePathname } from "next/navigation";
import Sidebar from "../sidebar/layout";
import styles from "./styles.module.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const pathName = usePathname();

  return (
    <main className={styles["container"]}>
      <Sidebar path={pathName} />
      <section className={styles["page-container"]}>{children}</section>
    </main>
  );
}

export default MainLayout;
