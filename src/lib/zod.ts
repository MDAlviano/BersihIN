import { object, string } from 'zod'

export const SignInSchema = object({
  name: string().min(3, "Username must be more than 3 characters"),
  email: string().email("Invalid email address"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .max(24, "Password must be less than 32 characters"),
  ConfirmPassword: string()
    .min(8, "Password must be at least 8 characters")
    .max(24, "Password must be less than 32 characters"),
}).refine((data) => data.password === data.ConfirmPassword, {
  message: "Password does not match",
  path:["ConfirmPassword"],
})