'use client'

import { useActionState } from "react"
import { useFormStatus } from "react-dom";
import { SignInCredentials } from "@/lib/action";
import Link from "next/link";
import Image from "next/image";

const SignInButton = () => {
  const {pending} = useFormStatus()

  return (
    <button
      type="submit"
      disabled={ pending }
      className="py-3 text-color5 font-semibold bg-color1 rounded-md"
    >
      { pending ? "Tunggu sebentar.." : "Masuk" }
    </button>
  )
}

export default function Page() {
  const [state, formAction] = useActionState(SignInCredentials, null)

  return (
    <div className="w-full h-screen flex flex-col gap-8 py-8 px-10 items-center bg-color7">
      {/* Logo */}
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src="/images/bersihin-logo1.webp"
          alt="logo"
          width={160}
          height={0}
        />
      </Link>

      <div className="flex flex-col">
        {/* Text */}
        <div className="flex flex-col w-full gap-2">
          <h1 className="text-3xl font-semibold">Selamat datang kembali!</h1>
          <h6 className="text-sm">
            Silahkan masuk menggunakan akun yang sudah terdaftar di website
            kami.
          </h6>
        </div>

        {/* <!-- Login Form --> */}
        <form
          action={ formAction }
          className="flex flex-col item gap-1 w-full mt-4"
        >
          {/* Error Message */}
          { state?.message ? (
            <div className="p-4 mb-2 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
              <span className="font-medium">{ state?.message }</span>
            </div>
          ) : null }

          {/* <!-- Email --> */}
          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="contoh@gmail.com"
              className="w-full p-2 border-color2 border rounded-md"
            />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">{state?.error?.email}</span>
            </div>
          </div>

          {/* <!-- Password --> */}
          <label className="font-semibold">Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            className="w-full p-2 border-color2 border rounded-md"
          />

          {/* <!-- Remember me & forgot password --> */}
          <div className="flex my-2 justify-between items-center">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="p-10 border border-color2"
              />
              <label className="text-sm">Ingat saya</label>
            </div>
            <Link href={""} className="text-sm text-color1 hover">
              Lupa password?
            </Link>
          </div>

          {/* SignIn btn */}
          <SignInButton />

          <div className="flex items-center my-1">
            <span className="w-full h-[1px] bg-[#BBBBBB]"></span>
            <span className="px-2 text-sm text-[#BBBBBB]">atau</span>
            <span className="w-full h-[1px] bg-[#BBBBBB]"></span>
          </div>

          {/* <!-- Google login --> */}
          <button className="py-3 text-color2 font-semibold bg-white border border-color2 rounded-md">
            Masuk dengan Google
          </button>
        </form>
      </div>

      {/* <!-- Sign up redirect --> */}
      <div className="text-sm mb-4">
        Belum punya akun?
        <Link href="/auth/register" className="ml-1 text-color1">
          Daftar di sini.
        </Link>
      </div>
    </div>
  );
}
