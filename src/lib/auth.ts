import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import { oneTap } from "better-auth/plugins";
import { passkey } from "better-auth/plugins/passkey";

// Option 1: Expliziter Typ
export const auth = betterAuth({
  database: new Database("./src/lib/sqlite.db"),

  emailAndPassword: {
    enabled: true,
  },
  plugins: [passkey(), oneTap()],

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: process.env.GOOGLE_REDIRECT_URI,
    },
  },
} as any);
