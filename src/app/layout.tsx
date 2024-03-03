import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Workout System",
  description: "Move your life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <main className={"container mx-xl"}>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
