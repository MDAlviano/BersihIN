import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import Credentials from "next-auth/providers/credentials"
import { SignInSchema } from "@/lib/zod"
import { compareSync } from "bcrypt-ts"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session:{strategy: "jwt"},
  pages: {
    signIn: "/auth/login"
  },
  providers: [
    Credentials({
      credentials:{
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedFields = SignInSchema.safeParse(credentials)

        if (!validatedFields.success) {
          return null
        }

        // Mengambil data user berdasarkan email
        const {email, password} = validatedFields.data

        const user = await prisma.user.findUnique({
          where: {email}
        })

        if (!user || !user.password) {
          throw new Error("No user found")
        }

        const passwordMatch = compareSync(password, user.password)

        if (!passwordMatch) return null

        return user
      }
    })
  ],

  // Callback
  callbacks: {
    authorized({auth, request:{nextUrl}}) {
      const isLoggedIn = !!auth?.user
      const ProtectedRoutes = ["/dashboard", "/user",]

      if (!isLoggedIn && ProtectedRoutes.includes(nextUrl.pathname)) {
        return Response.redirect(new URL("/auth/login", nextUrl))
      }

      if (isLoggedIn && nextUrl.pathname.startsWith("/auth/login")) {
        return Response.redirect(new URL("/dashboard", nextUrl))
      }

      return true
    }
  }
})