'use server'

import { SignInSchema } from "@/lib/zod"
import { hashSync } from "bcrypt-ts"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

export const SignInCredentials = async(prevState: unknown, formData: FormData) => {
  const validateFields = SignInSchema.safeParse(Object.fromEntries(formData.entries()))

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