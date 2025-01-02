import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-full py-8 px-10 flex flex-col gap-8 items-center bg-color7">
      {/* <!-- Logo --> */}
      <Link href={"/"} className="flex items-center gap-2">
        <span className="rounded-full w-14 h-14 bg-color4"></span>
        <h1 className="font-semibold text-2xl">BersihIN</h1>
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
        <form method="" action="" className="flex flex-col gap-1 w-full mt-4">
          {/* <!-- Name --> */}
          <label className="font-semibold">Username</label>
          <input
            type="text"
            name="username"
            id="username-form"
            required
            placeholder="Username"
            className="w-full p-2 border-color2 border rounded-md"
          />

          {/* <!-- Email --> */}
          <label className="font-semibold">Email</label>
          <input
            type="email"
            name="email"
            id="email-form"
            required
            placeholder="contoh@gmail.com"
            className="w-full p-2 border-color2 border rounded-md"
          />

          {/* <!-- Password --> */}
          <label className="font-semibold">Password</label>
          <input
            type="password"
            name="password"
            id="paassword-form"
            required
            placeholder="••••••••"
            // minlength="8"
            className="w-full p-2 border-color2 border rounded-md"
          />

          {/* <!-- Confirm Password --> */}
          <label className="font-semibold">Konfirmasi Password</label>
          <input
            type="conf-password"
            name="conf-password"
            id="paassword-form"
            required
            placeholder="••••••••"
            // minlength="8"
            className="w-full p-2 border-color2 border rounded-md"
          />

          {/* <!-- Signup btn --> */}
          <button
            type="submit"
            className="mt-4 py-3 text-color5 font-semibold bg-color1 rounded-md"
          >
            Buat akun
          </button>

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
            <span id="tnc-trigger" className="text-color1 hover:cursor-pointer">
              Syarat & Ketentuan
            </span>
            serta
            <span
              id="ppolicy-trigger"
              className="text-color1 hover:cursor-pointer"
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
        <Link href={"login"} className="ml-1 text-color1">
          Masuk.
        </Link>
      </div>
    </div>
  );
}
