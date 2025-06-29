import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { CreateNewUser, GetUsers } from "./dataService";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTUTH_SECRET,

  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const existingUser = await GetUsers(user.email);
        if (!existingUser)
          await CreateNewUser({ email: user.email, name: user.name });

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async session({ session }) {
      const GuestUser = await GetUsers(session.user.email);
      session.user.id = GuestUser.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
