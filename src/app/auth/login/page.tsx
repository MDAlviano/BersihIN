import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col gap-8 py-8 px-10 items-center justify-center bg-color7">
      {/* Logo */}
      <Link href={"/"} className="flex items-center gap-2">
        <span className="rounded-full w-14 h-14 bg-color4"></span>
        <h1 className="font-semibold text-2xl">BersihIN</h1>
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
          method=""
          action=""
          className="flex flex-col item gap-1 w-full mt-4"
        >
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
            id="password-form"
            required
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
                required
                className="p-10 border border-color2"
              />
              <label className="text-sm">Ingat saya</label>
            </div>
            <Link href={""} className="text-sm text-color1 hover">
              Lupa password?
            </Link>
          </div>

          {/* <!-- Login btn --> */}
          <button
            type="submit"
            className="py-3 text-color5 font-semibold bg-color1 rounded-md"
          >
            Masuk
          </button>

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
      <div className="text-sm">
        Belum punya akun?
        <Link href="register" className="ml-1 text-color1">
          Daftar di sini.
        </Link>
      </div>
    </div>
  );
}
