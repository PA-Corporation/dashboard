"use client";

import styles from "./styles.module.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return <main className={styles["page-container"]}>{children}</main>;
}

export default MainLayout;
