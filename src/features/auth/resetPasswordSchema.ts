import { z } from "zod";
import { passwordRegex } from "./loginSchema";

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Minimum 6 characters!" })
      .regex(passwordRegex, {
        message:
          "Password must contain at least one letter, one number, and one special character!",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match!",
  });

export type ResetPasswordData = z.infer<typeof resetPasswordSchema>;
