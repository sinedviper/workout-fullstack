"use client";
import { Auth } from "./components/Auth";

export const Header = () => {
  return (
    <header
      className={
        "flex w-full h-auto justify-between items-center max-w-screen-xl p-5"
      }
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
        Workout System
      </h1>
      <Auth />
    </header>
  );
};
