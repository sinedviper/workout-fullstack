import { DialogAddWorkout } from "@/components/app/DialogAddWorkout";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { Skeleton } from "@/components/ui";
import { LogOut } from "lucide-react";

export function Auth() {
  const { getUser, isLoading } = useKindeAuth();
  const user = getUser();

  if (isLoading) {
    return <Skeleton className={"h-10 w-50"} />;
  }

  return (
    <div className={"flex gap-5 items-center justify-center"}>
      {user ? (
        <>
          <DialogAddWorkout user={user} />
          <Avatar className={"cursor-pointer w-12 h-12"}>
            <AvatarImage src={user?.picture ?? ""} alt="profile" />
            <AvatarFallback>{user?.given_name?.[0]}</AvatarFallback>
          </Avatar>
          <LogoutLink>
            <LogOut />
          </LogoutLink>
        </>
      ) : (
        <>
          <LoginLink postLoginRedirectURL={"/"}>
            <Button>Sign in</Button>
          </LoginLink>
          <RegisterLink postLoginRedirectURL={"/"}>Sign up</RegisterLink>
        </>
      )}
    </div>
  );
}
