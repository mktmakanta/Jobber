import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Email", type: "email", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        let user = null;

        user = {
          id: "1",
          name: "Muhammad",
          email: "makanta66573@gmail.com",
        };
        if (!user) {
          return null;
        }
        return user;
      },
    }),
  ],
});
