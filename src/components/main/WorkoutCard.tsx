import { TableCell, TableRow } from "@/components/ui";
import { TWorkout } from "@/types";
import { JSX } from "react";

interface Props {
  workout: TWorkout;
}

export const WorkoutCard = ({ workout }: Props): JSX.Element => {
  return (
    <TableRow key={workout.id}>
      <TableCell className="font-medium">{workout.name}</TableCell>
      <TableCell className="w-[400px]">{workout.description}</TableCell>
      <TableCell>{workout.amountSets}</TableCell>
      <TableCell>{workout.amountRets}</TableCell>
      <TableCell className="text-right">
        <a
          href={workout.link}
          target={"_blank"}
          rel={"noreferrer"}
          className={"decoration-2 cursor-pointer"}
        >
          LINK
        </a>
      </TableCell>
    </TableRow>
  );
};
