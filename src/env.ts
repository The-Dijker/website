import { z } from "zod";

const envSchema = z.object({
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
});

type EnvSchema = z.infer<typeof envSchema>;

function validateEnv(): EnvSchema {
  try {
    return envSchema.parse({
      GMAIL_EMAIL: process.env.GMAIL_EMAIL,
      GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD,
      RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors
        .map((err) => {
          return `${err.path.join(".")}: ${err.message}`;
        })
        .join("\n");
      throw new Error(`❌ Invalid environment variables:\n${errorMessages}`);
    }
    throw error;
  }
}

const env = validateEnv();
export default env;
