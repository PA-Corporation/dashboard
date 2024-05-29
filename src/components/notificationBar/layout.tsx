import React from "react";
import styles from "./styles.module.css";

export default function NotificationBar() {
  return (
    <main className={styles["notification-container"]}>
      <h1 className={styles["notification-title"]}>Notification</h1>
      <p className={styles["notification-subtitle"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a neque
        sed justo volutpat vehicula.
      </p>
    </main>
  );
}
