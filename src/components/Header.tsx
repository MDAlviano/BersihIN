"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [navOpened, setNavOpened] = useState(false);

  const toggleNav = () => {
    setNavOpened(!navOpened);
  };

  const handleLinkClick = () => {
    setNavOpened(false);
  };

  const { isLogged } = useAuth();

  return (
    <>
      {/* <!-- Header --> */}
      <header
        id="header"
        className={`${
          navOpened
            ? "shadow-none border-black border-b-[1px] border-opacity-100"
            : "shadow-md border-opacity-0"
        } flex sticky z-50 top-0 w-full px-6 lg:px-40 py-3 lg:py-6 justify-between items-center bg-color8 border-black transition-all duration-200`}
      >
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={handleLinkClick}
        >
          <Image
            src="/images/bersihin-logo1.png"
            alt="logo"
            width={34}
            height={0}
          />
          <h1 className="font-semibold">BersihIN</h1>
        </Link>
        <button
          id="toggle-nav"
          onClick={toggleNav}
          className="transition-all duration-200 active:opacity-0 lg:hidden"
        >
          {/* <Menu className="w-fit"/> */}
          {navOpened ? (
            <IoClose className="w-full" size={24} />
          ) : (
            <IoMenu className="w-fit" size={24} />
          )}
        </button>
        <div className="hidden lg:flex">
          <Link
            href="/"
            className="py-2 px-6 hover:text-color1 hover:opacity-80 transition-all duration-200"
          >
            Home
          </Link>
          <Link
            href="/map"
            className="py-2 px-6 hover:text-color1 hover:opacity-80 transition-all duration-200"
          >
            Lihat Peta
          </Link>
          <Link
            href="/community"
            className="py-2 px-6 hover:text-color1 hover:opacity-80 transition-all duration-200"
          >
            Komunitas
          </Link>
          <Link
            href="/article"
            className="py-2 px-6 hover:text-color1 hover:opacity-80 transition-all duration-200"
          >
            Artikel
          </Link>
        </div>
        {isLogged ? (
          <Link
            href="/dashboard"
            className="hidden lg:inline p-6 rounded-full bg-slate-400"
            onClick={handleLinkClick}
          >
          </Link>
        ) : (
          <Link
            href="auth/login"
            className="hidden lg:inline py-2 px-10 text-center bg-color1 hover:bg-opacity-[0.85] text-color5 rounded-md"
            onClick={handleLinkClick}
          >
            Masuk
          </Link>
        )}
      </header>

      {/* <!-- Nav --> */}
      <nav
        id="nav-menu-mobile"
        className={`${
          navOpened
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-0 pointer-events-none"
        } lg:hidden flex fixed flex-col w-full z-50 py-4 text-color3 font-semibold shadow-md bg-color8 transition-all duration-500 ease-in-out transform`}
      >
        <Link
          href="/"
          className="py-2 px-6 hover:bg-gray-300"
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link
          href="/map"
          className="py-2 px-6 hover:bg-gray-300"
          onClick={handleLinkClick}
        >
          Lihat Peta
        </Link>
        <Link
          href="/community"
          className="py-2 px-6 hover:bg-gray-300"
          onClick={handleLinkClick}
        >
          Komunitas
        </Link>
        <Link
          href="/article"
          className="py-2 px-6 hover:bg-gray-300"
          onClick={handleLinkClick}
        >
          Artikel
        </Link>
        <span className="bg-black h-[1px] mx-6"></span>
        {isLogged ? (
          <Link
            href="/dashboard"
            className="py-2 mx-6 mt-4 text-center bg-color1 hover:bg-opacity-[0.85] text-color5 rounded-md"
            onClick={handleLinkClick}
          >
            Profil
          </Link>
        ) : (
          <Link
            href="/auth/login"
            className="py-2 mx-6 mt-4 text-center bg-color1 hover:bg-opacity-[0.85] text-color5 rounded-md"
            onClick={handleLinkClick}
          >
            Masuk
          </Link>
        )}
      </nav>
    </>
  );
}
