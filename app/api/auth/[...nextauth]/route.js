export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { Email, Password } = credentials;

        try {
          const user = await prisma.user.findUnique({
            where: { Email },
          });

          if (!user || user.Password !== Password) {
            return null;
          }

          return {
            id: user.id,
            email: user.Email,
            role: user.Role,
            status: user.Status,
            branchName: user.BranchName,
            name: user.Name,
            AdminId: user.AdminId, // ✅ Include AdminId
          };
        } catch (error) {
          console.error("Error during authentication: ", error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.name = user.name;
        token.id = user.id;
        token.status = user.status;
        token.adminId = user.AdminId; // ✅ Store in JWT
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.user.name = token.name;
        session.user.id = token.id;
        session.user.status = token.status;
        session.user.AdminId = token.adminId || null; // ✅ Pass to session
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
