import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "./Backend/models";
import { connectMongo } from "./Backend/utils";
import { authConfig } from "./authConfig";

const login = async (credentials) => {
  try {
    connectMongo();
    const user = await User.findOne({ username: credentials.username });

    if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

    var bcrypt = require("bcryptjs");
    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
  },
});
