"use client";

import { JSX } from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer
      className={"flex p-5 w-full max-w-screen-xl items-center justify-center"}
    >
      <p className={"text-sm font-medium leading-none"}>
        {new Date().getFullYear()} Project by Denis Repyev
      </p>
    </footer>
  );
};
