import { object, string } from 'zod'

export const SignInSchema = object({
  email: string().email("Alamat email salah"),
  password: string()
    .min(8, "Password harus lebih dari 8 huruf")
    .max(24, "Password tidak bisa lebih dari 24 huruf"),
})

export const SignUpSchema = object({
  name: string().min(3, "Nama pengguna harus lebih dari 3 huruf"),
  email: string().email("Alamat email salah"),
  password: string()
    .min(8, "Password harus lebih dari 8 huruf")
    .max(24, "Password tidak bisa lebih dari 24 huruf"),
  ConfirmPassword: string()
    .min(8, "Password harus lebih dari 8 huruf")
    .max(24, "Password tidak bisa lebih dari 24 huruf"),
}).refine((data) => data.password === data.ConfirmPassword, {
  message: "Password tidak sama",
  path:["ConfirmPassword"],
})