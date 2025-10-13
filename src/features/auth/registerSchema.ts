import { z } from "zod";
import { passwordRegex } from "./loginSchema";

export const registerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(passwordRegex, {
      message:
        "Password must contain at least one letter, one number, and one special character!",
    }),
});

export type RegisterData = z.infer<typeof registerSchema>;
