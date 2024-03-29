export type TWorkout = {
  id: number;
  name: string;
  description: string;
  amountSets: string;
  amountRets: string;
  link: string;
};

export type TState = { load: boolean; data: TWorkout[] };
