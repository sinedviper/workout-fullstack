import { createContext } from "react";
import { TState } from "@/types";

export const ThemeData = createContext<null | {
  workouts: TState;
  setWorkouts: (workouts: TState) => void;
}>(null);
