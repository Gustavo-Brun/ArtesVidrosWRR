import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import getUser from "@/functions/getUser";
import { UserProps } from "@/functions/getUser";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        password: {},
      },
      authorize: (credentials) => {
        let user = null;

        user = getUser(credentials as UserProps);

        if (!user) {
          throw new Error("User not authorized.");
        }

        return user;
      },
    }),
  ],
});
