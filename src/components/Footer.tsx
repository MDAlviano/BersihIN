import Link from "next/link";
import { Mail, Phone, Instagram, Twitter, Facebook } from "@geist-ui/icons";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col px-6 py-10 gap-6 bg-color3 text-white">
        {/* Logo n desc */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/images/bersihin-logo2.png"
              alt="logo"
              width={60}
              height={0}
            />
            <h1 className="text-xl font-semibold">BersihIN</h1>
          </Link>
          <h6 className="text-sm font-light">
            BersihIN adalah sebuah platform yang memfasilitasi masyarakat dalam
            kegiatan kebersihan lingkungan.
          </h6>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-xl">Quick Links</h4>
          <div className="flex flex-col w-fit font-light">
            <Link href="" className="py-1">
              Home
            </Link>
            <Link href="/map" className="py-1">
              Peta
            </Link>
            <Link href="" className="py-1">
              Laporan
            </Link>
            <Link href="/community" className="py-1">
              Komunitas
            </Link>
          </div>
        </div>
        {/* Contacts */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-xl">Contact Us</h4>
          <div className="flex flex-col w-fit font-light">
            <Link href="" className="flex gap-2 py-2 items-center">
              <Mail />
              official.bersihin@contact.id
            </Link>
            <Link
              href=""
              target="_blank"
              className="flex gap-2 py-2 items-center"
            >
              <Phone />
              +62 888-6942-0000
            </Link>
          </div>
        </div>
        {/* Socials */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-xl">Follow Us</h4>
          <div className="flex flex-col w-fit font-light gap-2">
            <Link href="" className="flex gap-2 py-1 items-center">
              <div className="p-2 rounded-full bg-[#022A38]">
                <Instagram />
              </div>
              @official.bersihin
            </Link>
            <Link href="" className="flex gap-2 py-1 items-center">
              <div className="p-2 rounded-full bg-[#022A38]">
                <Twitter />
              </div>
              @official.bersihin
            </Link>
            <Link href="" className="flex gap-2 py-1 items-center">
              <div className="p-2 rounded-full bg-[#022A38]">
                <Facebook />
              </div>
              @official.bersihin
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
