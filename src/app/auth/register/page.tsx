'use client'

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import { SignUpCredentials } from "@/lib/action"

const SignUpButton = () => {
  const {pending} = useFormStatus()

  return (
    <button
      type="submit"
      disabled={ pending }
      className="mt-4 py-3 text-color5 font-semibold bg-color1 rounded-md"
    >
      { pending ? "Membuat akun.." : "Buat akun" }
    </button>
  )
}

export default function Page() {
  const [state, formAction] = useActionState(SignUpCredentials, null)

  return (
    <div className="w-full h-full py-8 px-10 flex flex-col gap-8 items-center bg-color7">
      {/* <!-- Logo --> */}
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src="/images/bersihin-logo1.webp"
          alt="logo"
          width={160}
          height={0}
        />
      </Link>

      <div className="flex flex-col">
        {/* <!-- Text --> */}
        <div className="flex flex-col w-full gap-2">
          <h1 className="text-3xl font-semibold">Mulai perjalananmu!</h1>
          <h6 className="text-sm">
            Buat akunmu sekarang juga untuk mendapat akses fitur dan mulai
            menjadi agen perubahan.
          </h6>
        </div>

        {/* <!-- Login Form --> */}
        <form action={ formAction } className="flex flex-col gap-1 w-full mt-4">
          {/* Error Message */}
          { state?.message ? (
            <div className="p-4 mb-2 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
              <span className="font-medium">{ state?.message }</span>
            </div>
          ) : null }

          {/* <!-- Name --> */}
          <div>
            <label
              htmlFor="name"
              className="font-semibold"
            >
              Username
            </label>
            <input
              type="text"
              name="name"
              placeholder="Username"
              className="w-full p-2 border-color2 border rounded-md"
            />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">{ state?.error?.name }</span>
            </div>
          </div>

          {/* <!-- Email --> */}
          <div>
            <label
              htmlFor="email"
              className="font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="contoh@gmail.com"
              className="w-full p-2 border-color2 border rounded-md"
            />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">{ state?.error?.email }</span>
            </div>
          </div>

          {/* <!-- Password --> */}
          <div>
            <label
              htmlFor="password"
              className="font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              // minlength="8"
              className="w-full p-2 border-color2 border rounded-md"
            />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">{ state?.error?.password }</span>
            </div>
          </div>

          {/* <!-- Confirm Password --> */}
          <div>
            <label
              htmlFor="ConfirmPassword"
              className="font-semibold">Konfirmasi Password</label>
            <input
              type="password"
              name="ConfirmPassword"
              placeholder="••••••••"
              // minlength="8"
              className="w-full p-2 border-color2 border rounded-md"
            />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">{ state?.error?.ConfirmPassword }</span>
            </div>
          </div>

          {/* <!-- Signup btn --> */}
          <SignUpButton />

          <div className="flex items-center my-1">
            <span className="w-full h-[1px] bg-[#BBBBBB]"></span>
            <span className="px-2 text-sm text-[#BBBBBB]">atau</span>
            <span className="w-full h-[1px] bg-[#BBBBBB]"></span>
          </div>

          {/* <!-- Google signup --> */}
          <button className="py-3 text-color2 font-semibold bg-white border border-color2 rounded-md">
            Daftar dengan Google
          </button>

          <div className="mt-4 text-xs text-center">
            Dengan mendaftar, kamu menyetujui
            <span id="tnc-trigger" className="text-color1 mx-1 hover:cursor-pointer">
              Syarat & Ketentuan
            </span>
            serta
            <span
              id="ppolicy-trigger"
              className="text-color1 mx-1 hover:cursor-pointer"
            >
              Kebijakan Privasi
            </span>
            kami.
          </div>
        </form>
      </div>

      {/* <!-- Login redirect --> */}
      <div className="text-sm mb-4">
        Sudah punya akun?
        <Link href="/auth/login" className="ml-1 text-color1">
          Masuk.
        </Link>
      </div>
    </div>
  );
}
