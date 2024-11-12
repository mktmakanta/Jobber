import React from "react";
import { useSession } from "next-auth/react";

export default function Check() {
  const { data: session } = useSession();

  return (
    <main className="">
      {session ? (
        <button className="">Sign Out</button>
      ) : (
        <button className="">Sign In</button>
      )}
    </main>
  );
}
