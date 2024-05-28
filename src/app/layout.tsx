import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "@/components/mainlayout/layout";
import { NextUIProvider } from "@nextui-org/react";
import {
  ClerkLoaded,
  ClerkLoading,
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

import "./globals.css";
import Loading from "@/components/loading/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for the company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NextUIProvider>
            <SignedIn>
              <MainLayout>{children}</MainLayout>
            </SignedIn>
            <SignedOut>
              <ClerkLoading>
                <Loading />
              </ClerkLoading>
              <ClerkLoaded>
                <RedirectToSignIn />
                {children}
              </ClerkLoaded>
            </SignedOut>
          </NextUIProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
