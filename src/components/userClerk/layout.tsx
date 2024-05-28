import React from "react";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import LoadingUser from "../loadingUser/layout";
import styles from "./styles.module.css";

export default function UserComponent() {
  return (
    <>
      <ClerkLoading>
        <div className={styles["main"]}>
          <LoadingUser />
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <div className={styles["main"]}>
          <UserButton
            showName={true}
            afterSignOutUrl="/signed-in"
            appearance={{
              elements: {
                rootBox: styles.button,
                userButtonOuterIdentifier: styles.user,
                userButtonBox: styles.container,
                userButtonTrigger: styles.btnTriger,
              },
            }}
          />
        </div>
      </ClerkLoaded>
    </>
  );
}
