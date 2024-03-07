"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ThemeData } from "@/hooks";
import { WorkoutCard, WorkoutSkeleton, WorkoutWrap } from "@/components/main";

export default function Home() {
  const { toast } = useToast();
  const { workouts, setWorkouts } = useContext(ThemeData)!;

  const [search, setSearch] = useState("");
  const refSearch = useRef<NodeJS.Timeout | undefined>();

  const handleChangeSearch = (e: any) => {
    clearTimeout(refSearch.current);
    setSearch(e.target.value);
    refSearch.current = setTimeout(() => {
      setWorkouts({ ...workouts, load: true });
      fetch("/api/workout?search=" + e.target.value, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setWorkouts({ load: false, data }))
        .catch(() =>
          toast({
            title: "Workouts weren't found",
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
          title: "Workouts weren't loaded",
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
        <WorkoutSkeleton />
      ) : (
        <WorkoutWrap>
          {workouts.data.map((workout) => (
            <WorkoutCard workout={workout} key={workout.id} />
          ))}
        </WorkoutWrap>
      )}
    </>
  );
}
