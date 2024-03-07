import { Skeleton } from "@/components/ui";
import { JSX } from "react";

export const WorkoutSkeleton = (): JSX.Element => {
  return (
    <div className={"flex flex-col gap-3 w-full"}>
      <Skeleton className={"w-full h-12"} />
      <Skeleton className={"w-full h-12"} />
      <Skeleton className={"w-full h-12"} />
      <Skeleton className={"w-full h-12"} />
      <Skeleton className={"w-full h-12"} />
      <Skeleton className={"w-full h-12"} />
      <Skeleton className={"w-full h-12"} />
      <Skeleton className={"w-full h-12"} />
      <Skeleton className={"w-full h-12"} />
    </div>
  );
};
