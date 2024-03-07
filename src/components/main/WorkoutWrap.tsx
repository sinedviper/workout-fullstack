import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { JSX, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const WorkoutWrap = ({ children }: Props): JSX.Element => {
  return (
    <div className={"flex flex-col w-full scroll-auto h-[500px]"}>
      <Table>
        <TableCaption>A list of workouts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="w-[400px]">Description</TableHead>
            <TableHead>Amount of Sets</TableHead>
            <TableHead>Amount of Rets</TableHead>
            <TableHead className="w-[100px]">Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{children}</TableBody>
      </Table>
    </div>
  );
};
