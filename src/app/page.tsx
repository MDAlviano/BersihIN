"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Home() {
  const {isLogged} = useAuth()

  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="h-screen max-h-screen flex flex-col bg-scroll bg-cover bg-center bg-[url('/images/hero-bg.webp')]"
      >
        <div className="h-full max-h-screen flex flex-col gap-4 py-20 px-10 text-color8 bg-gradient-to-b from-[#0a0a0a59] from-40% to-transparent">
          <h1 className="text-3xl font-semibold shadow-sm">
            Ketahui Kondisi Lingkungan di Sekitarmu!
          </h1>
          <h6 className="text-base font-light shadow-sm">
            Ayo jadi agen perubahan dengan memperhatikan dan memperbaiki kondisi
            lingkungan di sekitarmu.
          </h6>
          {/* Button group */}
          <div className="flex flex-row gap-4">
            <Link href="/map">
              <button className="w-auto py-3 px-5 bg-color1 rounded-md text-sm">
                Lihat Peta
              </button>
            </Link>
            {isLogged ? (
              ""
            ) : (
              <Link href="/auth/register">
                <button className="w-auto py-3 px-5 text-sm text-color1 bg-black bg-opacity-10 shadow-sm border-color1 border-2 rounded-md">
                  Bergabung
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>
      <section id="map" className="px-10 py-14">
        <h1 >Cek Kondisi Terkini</h1>
      </section>
    </>
  );
}
