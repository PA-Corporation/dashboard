import React from "react";
import {
  ClerkLoaded,
  ClerkLoading,
  RedirectToSignIn,
  SignedOut,
} from "@clerk/nextjs";
import Loading from "../loading/layout";

export default function ClerkSignedOut({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SignedOut>
      <ClerkLoading>
        <Loading />
      </ClerkLoading>
      <ClerkLoaded>
        <RedirectToSignIn />
        {children}
      </ClerkLoaded>
    </SignedOut>
  );
}
