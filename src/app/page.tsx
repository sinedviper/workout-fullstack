"use client";
import { useContext, useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui";
import { ThemeData } from "@/hooks";

export default function Home() {
  const { toast } = useToast();
  const { workouts, setWorkouts } = useContext(ThemeData)!;

  const [search, setSearch] = useState("");
  const refSearch = useRef<NodeJS.Timeout | undefined>();

  const handleChangeSearch = (e) => {
    clearTimeout(refSearch.current);
    setSearch(e.target.value);
    refSearch.current = setTimeout(() => {
      setWorkouts((pre) => ({ ...pre, load: true }));
      fetch("/api/workout?search=" + e.target.value, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setWorkouts({ load: false, data }))
        .catch(() =>
          toast({
            title: "Workouts weren't load",
          }),
        );
    }, 800);
  };

  useEffect(() => {
    setWorkouts({ load: true, data: [] });
    fetch("/api/workout", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setWorkouts({ load: false, data }))
      .catch(() =>
        toast({
          title: "Workouts weren't load",
        }),
      );
  }, []);

  return (
    <>
      <Input
        className={"w-full cursor-pointer"}
        placeholder={"Search workout"}
        value={search}
        onChange={handleChangeSearch}
      />
      {workouts.load ? (
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
      ) : (
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
            <TableBody>
              {workouts.data.map((workout) => (
                <TableRow key={workout.id}>
                  <TableCell className="font-medium">{workout.name}</TableCell>
                  <TableCell className="w-[400px]">
                    {workout.description}
                  </TableCell>
                  <TableCell>{workout.amountSets}</TableCell>
                  <TableCell>{workout.amountRets}</TableCell>
                  <TableCell className="text-right">
                    <a
                      target={"_blank"}
                      rel={"noreferrer"}
                      className={"decoration-2 cursor-pointer"}
                    >
                      {workout.link}
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
}
