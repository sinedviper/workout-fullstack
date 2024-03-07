import { createContext } from "react";
import { TWorkout } from "@/types";
type TState = { load: boolean; data: TWorkout[] };
export const ThemeData = createContext<null | {
  workouts: TState;
  setWorkouts: (workouts: TState) => void;
}>(null);
