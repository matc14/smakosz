import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();


export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        login: { label: 'login', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        const user = await prisma.user.findUnique({
          where: { login: credentials.login },
        });

        if (!user) {
          return null;
        }

        const isValidPassword = await bcrypt.compare(credentials.password, user.password);
        if (!isValidPassword) {
          return null;
        }

        return user;
      }
    })
  ],

  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({token, user, session}) {
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.login,
        }
      }
      return token;
    },
    async session({session, token, user}) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
        }
      }
      return session;
    }
  },
  secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

