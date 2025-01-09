'use server'

import { SignUpSchema, SignInSchema } from "@/lib/zod"
import { hashSync } from "bcrypt-ts"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import { signIn } from "@/../auth"
import { AuthError } from "next-auth"

export const SignUpCredentials = async(prevState: unknown, formData: FormData) => {
  const validateFields = SignUpSchema.safeParse(Object.fromEntries(formData.entries()))

  if(!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors
    }
  }

  const { name, email, password } = validateFields.data
  const hashedPassword = hashSync(password, 10)

  try {
    await prisma.user.create({
      data:{
        name: name,
        email: email,
        password: hashedPassword
      }
    })
  } catch (error) {
    return { message: "Failed to register user" }
  }
  redirect("/auth/login")
}

// Sign In Credential Action
export const SignInCredentials = async(prevState: unknown, formData: FormData) => {
  const validateFields = SignInSchema.safeParse(Object.fromEntries(formData.entries()))

  if(!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors
    }
  }

  const { email, password } = validateFields.data
  
  try {
    await signIn("credentials", { email, password, redirectTo: "/" })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Akun tidak ditemukan." }
        default:
          return { message: "Terjadi kesalahan. Maaf anda kurang beruntung." }
      }
    }

    throw error
  }
}