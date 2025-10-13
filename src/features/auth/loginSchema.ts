import { z } from "zod";

export const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;

export const loginSchema = z.object({
  email: z.email({ message: "Invalid email!" }),
  password: z
    .string()
    .min(6, { message: "Minimum 6 characters!" })
    .regex(passwordRegex, {
      message:
        "Password must contain at least one letter, one number, and one special character!",
    }),
});

export type LoginData = z.infer<typeof loginSchema>;
