"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function Home() {
  const [auth, setAuth] = useState(false);

  const { toast } = useToast();

  const handleToaster = () => {
    toast({
      title: "Scheduled: Catch up ",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/workoutsSearch?search=werf", {
      method: "GET",
    }).then((res) => console.log(res));
  }, []);

  return (
    <div className="flex min-h-screen gap-10 max-w-screen-xl flex-col items-center justify-start p-5">
      <div className={"flex w-full h-auto justify-between items-center"}>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
          Workout System
        </h1>
        <div className={"flex gap-5 items-center justify-center"}>
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
              <div className="flex flex-col gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-left">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type={"text"}
                    value="Denis"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="login" className="text-left">
                    Description
                  </Label>
                  <Textarea
                    id={"description"}
                    className="col-span-3 max-h-52"
                    placeholder="Type your description a workout."
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-left">
                    Amount of sets
                  </Label>
                  <Input
                    id="amountsets"
                    type={"text"}
                    value="5"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-left">
                    Amount of rets
                  </Label>
                  <Input
                    id="amountrets"
                    type={"text"}
                    value="10"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-left">
                    Link
                  </Label>
                  <Input
                    id="amountrets"
                    type={"text"}
                    value="wergwergwergwegrewrgwerg"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className={"w-full"}>
                  Add workout
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Avatar className={"cursor-pointer w-12 h-12"}>
                <AvatarImage src="" alt="profile" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className={"w-full justify-center items-center"}>
                  {auth ? "Registration" : "Login"}
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                {auth ? (
                  <>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-left">
                        Name
                      </Label>
                      <Input
                        id="name"
                        type={"text"}
                        value="Denis"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="login" className="text-left">
                        Login
                      </Label>
                      <Input
                        id="login"
                        value="sinedviper"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="password" className="text-left">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type={"password"}
                        value="r3423gf234gf"
                        className="col-span-3"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="login" className="text-left">
                        Login
                      </Label>
                      <Input
                        id="login"
                        value="sinedviper"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="password" className="text-left">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type={"password"}
                        value="r3423gf234gf"
                        className="col-span-3"
                      />
                    </div>
                  </>
                )}
              </div>
              <DialogFooter>
                <Button type="submit" className={"w-full"}>
                  {auth ? "Sign-up" : "Enter"}
                </Button>
                <Button
                  type="button"
                  className={"w-full outline"}
                  onClick={() => setAuth(!auth)}
                >
                  {auth ? "Login" : "Registration"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className={"flex flex-col gap-5 w-full"}>
        <Input
          className={"w-full cursor-pointer"}
          placeholder={"Search workout"}
          onClick={handleToaster}
        />
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
            <TableRow>
              <TableCell className="font-medium">system 1 super best</TableCell>
              <TableCell className="w-[400px]">
                system system system system system system system system system
                system system system system system system system system system
                system system system system system system system system system
                system system system
              </TableCell>
              <TableCell>5</TableCell>
              <TableCell>10</TableCell>
              <TableCell className="text-right">
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={"decoration-2 cursor-pointer"}
                >
                  232323232323232
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">system 1 super best</TableCell>
              <TableCell className="w-[400px]">
                system system system system system system system system system
                system system system system system system system system system
                system system system system system system system system system
                system system system
              </TableCell>
              <TableCell>5</TableCell>
              <TableCell>10</TableCell>
              <TableCell className="text-right">
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={"decoration-2 cursor-pointer"}
                >
                  232323232323232
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">system 1 super best</TableCell>
              <TableCell className="w-[400px]">
                system system system system system system system system system
                system system system system system system system system system
                system system system system system system system system system
                system system system
              </TableCell>
              <TableCell>5</TableCell>
              <TableCell>10</TableCell>
              <TableCell className="text-right">
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={"decoration-2 cursor-pointer"}
                >
                  232323232323232
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">system 1 super best</TableCell>
              <TableCell className="w-[400px]">
                system system system system system system system system system
                system system system system system system system system system
                system system system system system system system system system
                system system system
              </TableCell>
              <TableCell>5</TableCell>
              <TableCell>10</TableCell>
              <TableCell className="text-right">
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={"decoration-2 cursor-pointer"}
                >
                  232323232323232
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">system 1 super best</TableCell>
              <TableCell className="w-[400px]">
                system system system system system system system system system
                system system system system system system system system system
                system system system system system system system system system
                system system system
              </TableCell>
              <TableCell>5</TableCell>
              <TableCell>10</TableCell>
              <TableCell className="text-right">
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={"decoration-2 cursor-pointer"}
                >
                  232323232323232
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">system 1 super best</TableCell>
              <TableCell className="w-[400px]">
                system system system system system system system system system
                system system system system system system system system system
                system system system system system system system system system
                system system system
              </TableCell>
              <TableCell>5</TableCell>
              <TableCell>10</TableCell>
              <TableCell className="text-right">
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  className={"decoration-2 cursor-pointer"}
                >
                  232323232323232
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
