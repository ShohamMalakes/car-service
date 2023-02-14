"use client";
import { Button } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "./NavBar";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button onClick={() => signOut()}>sign out</Button>
        {/* <Navbar user={session.user} /> */}
      </>
    );
  } else {
    return (
      <>
        <Button onClick={() => signIn()}>sign in</Button>
      </>
    );
  }
}
