import { JSX, useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ThemeData } from "@/hooks";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  user?: KindeUser;
}
export const DialogAddWorkout = ({ user }: Props): JSX.Element => {
  const { workouts, setWorkouts } = useContext(ThemeData)!;
  const { toast } = useToast();

  const handleCreateWorkout = (e) => {
    e.preventDefault();
    const [name, description, amountsets, amoutrets, link] = e.target;
    if (
      !name?.value ||
      !description?.value ||
      !amountsets?.value ||
      !amoutrets?.value ||
      !link?.value
    ) {
      toast({
        title: "Please enter all fields",
      });
    } else {
      fetch("/api/workout", {
        method: "POST",
        body: JSON.stringify({
          name: name?.value,
          description: description?.value,
          amountSets: amountsets?.value,
          amountRets: amoutrets?.value,
          link: link?.value,
        }),
      })
        .then((res) => res.json())
        .then((data) => setWorkouts({ load: false, data }))
        .then(() => toast({ title: "The workout was created" }))
        .catch(() => toast({ title: "Can't create the workout" }));
    }
    console.log(
      name?.value,
      description?.value,
      amountsets?.value,
      amoutrets?.value,
      link?.value,
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add workout</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className={"w-full justify-center items-center"}>
            Workout create
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleCreateWorkout}
          className="flex flex-col gap-4 py-4"
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input id="name" type={"text"} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-left">
              Description
            </Label>
            <Textarea
              id={"description"}
              className="col-span-3 max-h-52"
              placeholder="Type your description a workout."
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amountsets" className="text-left">
              Amount of sets
            </Label>
            <Input id="amountsets" type={"text"} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amountrets" className="text-left">
              Amount of rets
            </Label>
            <Input id="amountrets" type={"text"} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="link" className="text-left">
              Link
            </Label>
            <Input id="link" type={"text"} className="col-span-3" />
          </div>
          <Button type="submit" className={"w-full"}>
            Add workout
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
