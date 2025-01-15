"use client";

import FaqItem from "@/components/FaqItem";
import { useAuth } from "@/context/AuthContext";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { faqs, commItems } from "@/lib/dummyData";
import Image from "next/image";
import CommunityItem from "@/components/CommunityItem";
import map from "../../public/images/wilayah.png"

export default function Home() {
  const { isLogged } = useAuth();

  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="h-screen max-h-screen flex flex-col bg-scroll bg-cover bg-center bg-[url('/images/hero-bg.webp')]"
      >
        <div className="h-full max-h-screen flex flex-col gap-4 py-20 lg:py-36 px-10 lg:px-40 lg:justify-around text-color8 bg-gradient-to-b from-[#0a0a0a59] from-40% to-transparent lg:from-80%">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl lg:text-6xl font-semibold shadow-sm">
              Ketahui Kondisi Lingkungan di Sekitarmu!
            </h1>
            <h6 className="text-base lg:text-xl font-light shadow-sm">
              Ayo jadi agen perubahan dengan memperhatikan dan memperbaiki
              kondisi lingkungan di sekitarmu.
            </h6>
          </div>
          {/* Button group */}
          <div className="flex flex-row gap-4 items-center lg:mb-10">
            <Link href="/map">
              <button className="w-auto py-3 lg:py-5 px-5 lg:px-10 bg-color1 rounded-md text-sm lg:text-xl">
                Lihat Peta
              </button>
            </Link>
            {isLogged ? (
              ""
            ) : (
              <Link href="/auth/register">
                <button className="w-auto py-3 lg:py-5 px-5 lg:px-10 text-sm lg:text-xl text-color1 bg-black bg-opacity-10 shadow-sm border-color1 border-2 rounded-md">
                  Bergabung
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section
        id="map"
        className="flex flex-col gap-1 px-10 lg:px-80 py-14 lg:py-28"
      >
        <h1 className="text-2xl lg:text-4xl font-semibold">
          Cek Kondisi Terkini
        </h1>
        <h4 className="text-sm lg:text-lg font-light">
          Cari tahu bagaimana kondisi terbaru di setiap wilayah!
        </h4>
        <Image
          src={map}
          layout="responsive"
          alt="map"
          className="p-2 lg:max-w-2xl lg:py-6 self-center mb-4"
        />
        <Link href="/map">
          <button className="flex items-center gap-2 w-auto py-3 lg:py-5 px-5 lg:px-10 bg-color1 rounded-lg text-sm lg:text-base text-color7">
            Cek di sini <FaArrowRight size={20} />
          </button>
        </Link>
      </section>

      {/* Community */}
      <section id="community" className="flex flex-col gap-1 px-10 lg:px-80">
        <h1 className="text-2xl lg:text-4xl font-semibold">Komunitas</h1>
        <h4 className="text-sm lg:text-lg font-light">
          Bergabung bersama kami dan dapatkan manfaatnya!
        </h4>
        <div className="w-full max-w-full lg:max-w-4xl self-center overflow-x-auto scroll-smooth snap-x snap-mandatory">
          <div className="flex w-max mt-2">
            {commItems.map((item) => (
              <CommunityItem key={item.id} id={item.id} image={item.image} title={item.title} description={item.description}/>
            ))}
          </div>
        </div>
      </section>

      {/* Article */}
      <section id="article" className="flex flex-col">
          
      </section>

      {/* FAQ */}
      <section id="faq" className="pt-10">
        <div className="flex flex-col mx-6 lg:mx-80 my-10 px-6 lg:px-20 py-10 gap-8 rounded-xl items-center bg-color1 shadow transition duration-100">
          <h1 className="text-4xl font-bold text-color7 text-center">FAQ</h1>
          <div className="flex flex-col w-full gap-4">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                index={index + 1}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
