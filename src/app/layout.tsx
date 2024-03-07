"use client";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import { Inter } from "next/font/google";
import cn from "classnames";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Footer, Header } from "@/components/app";
import React, { useState } from "react";
import { ThemeData } from "@/hooks";
import { TWorkout } from "@/types";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [workouts, setWorkouts] = useState<{ load: boolean; data: TWorkout[] }>(
    { load: true, data: [] },
  );
  return (
    <KindeProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased items-center w-full justify-center flex flex-col",
            fontSans.variable,
          )}
        >
          <ThemeData.Provider value={{ workouts, setWorkouts }}>
            <Header />
            <main
              className={
                "flex min-h-screen gap-10 max-w-screen-xl flex-col items-center justify-start p-5 w-full"
              }
            >
              {children}
            </main>
            <Footer />
          </ThemeData.Provider>
          <Toaster />
        </body>
      </html>
    </KindeProvider>
  );
}
