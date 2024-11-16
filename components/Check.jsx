import { useSession, signOut, signIn } from "next-auth/react";

export default function Check() {
  const { data: session } = useSession();

  return (
    <main className="">
      {session ? (
        <button onClick={() => signOut({ callbackUrl: "/" })} className="">
          Sign Out
        </button>
      ) : (
        <button onClick={() => signIn()} className="">
          Sign In
        </button>
      )}
    </main>
  );
}
