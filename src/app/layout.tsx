import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "@/components/mainlayout/layout";
import { NextUIProvider } from "@nextui-org/react";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import ClerkSignedOut from "@/components/clerkSignedOut/layout";
import Sidebar from "@/components/sidebar/layout";

import "./globals.css";

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
              <main className="mainApp">
                <Sidebar />
                <MainLayout>{children}</MainLayout>
              </main>
            </SignedIn>
            <ClerkSignedOut children={children} />
          </NextUIProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
