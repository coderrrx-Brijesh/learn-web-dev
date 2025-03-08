'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import { Button } from "./ui/button";

import { signIn } from "../actions/sign-in";
import { signOut } from "../actions/sign-out";
import { auth } from "../auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Separator } from "@/components/ui/separator";

const AuthHeader = () => {
    const session= useSession();

    if(session.status === "loading") return null;

    let authContent: React.ReactNode;

    if(session.data?.user){
        authContent = (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar>
                  <AvatarImage src={session.data.user.image || ""}/>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex flex-col gap-2 items-center">
                  <h1 className="font-bold">{session.data.user.name}</h1>
                  <Separator/>
                  <form action={signOut}>
                    <Button type="submit">
                      Sign Out
                    </Button>
                  </form>
                </div>
              </PopoverContent>
            </Popover>
          ) 
        }
          else {
            authContent =(
                <>
                  <form action={signIn}>
                    <Button type="submit" variant="outline">
                      Sign In
                    </Button>
                  </form>
                  <form action={signIn}>
                    <Button type="submit">Sign Up</Button>
                  </form>
                </>
              )
          } 
  return authContent
}

export default AuthHeader