import type { NextAuthConfig } from 'next-auth';
import GitHub from "next-auth/providers/github";
import crypto from 'crypto';

import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

export const authConfig = {
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard/user', nextUrl));
      }
      return true;
    },
    async signIn({ user, account, profile }) {
      try {
        await connectToDatabase();

        // Check if the user already exists in the database
        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          // Generate a random API key
          const apiKey = crypto.randomBytes(32).toString('hex');
          console.log("Created api key: ", apiKey);

          // If the user does not exist, create a new user record
          const newUser = await User.create({
            name: user.name,
            email: user.email,
            apiKey: apiKey,
          });

          console.log("New user created: ", newUser);
        } else {
          console.log("User already exists: ", existingUser);
        }
      } catch (error) {
        console.error("Error during signIn callback: ", error);
      }

      return true;
    },
    async jwt({ token, user }) {
      // When the user object is available (sign-in), save the user ID in the token
      if (user) {
        token.id = user.id; // Save the MongoDB user ID
      }
      return token;
    },
    async session({ session, token }) {
      // Include the user ID from the token in the session object
      session.user.id = token.id;
      return session;
    },
  },
  providers: [
    GitHub,
  ], // Add providers with an empty array for now
} satisfies NextAuthConfig;