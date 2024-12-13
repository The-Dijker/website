import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    BASE_URL: z.string().url(),
    GMAIL_EMAIL: z.string().email({
      message: "Invalid Gmail address format",
    }),
    GMAIL_APP_PASSWORD: z
      .string()
      .regex(/^[a-z]{4}\s[a-z]{4}\s[a-z]{4}\s[a-z]{4}$/, {
        message:
          "Gmail App Password must be 16 lowercase letters in groups of 4, separated by spaces (e.g., 'abcd efgh ijkl mnop')",
      }),
    RECIPIENT_EMAIL: z.string().email({
      message: "Invalid recipient email address format",
    }),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    BASE_URL: process.env.BASE_URL,
    GMAIL_EMAIL: process.env.GMAIL_EMAIL,
    GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD,
    RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
    NODE_ENV: process.env.NODE_ENV,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});

export default env;
