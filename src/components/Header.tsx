"use client";

import { Menu, X } from "@geist-ui/icons";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

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
        } flex sticky top-0 w-full px-6 py-3 justify-between bg-color8 border-black transition-all duration-200`}
      >
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={handleLinkClick}
        >
          <Image
            src="/images/bersihin-logo1.webp"
            alt="logo"
            width={80}
            height={0}
          />
        </Link>
        <button
          id="toggle-nav"
          onClick={toggleNav}
          className="transition-all duration-200 active:opacity-0"
        >
          {/* <Menu className="w-fit"/> */}
          {navOpened ? <X className="w-fit" /> : <Menu className="w-fit" />}
        </button>
      </header>

      {/* <!-- Nav --> */}
      <nav
        id="nav-menu-mobile"
        className={`${
          navOpened
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-0 pointer-events-none"
        } flex fixed flex-col w-full py-4 text-color3 font-semibold shadow-md bg-color8 transition-all duration-500 ease-in-out transform`}
      >
        <Link
          href="/"
          className="py-2 px-6 hover:bg-gray-300"
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link
          href="map"
          className="py-2 px-6 hover:bg-gray-300"
          onClick={handleLinkClick}
        >
          Lihat Peta
        </Link>
        <Link
          href="community"
          className="py-2 px-6 hover:bg-gray-300"
          onClick={handleLinkClick}
        >
          Komunitas
        </Link>
        <Link
          href="article"
          className="py-2 px-6 hover:bg-gray-300"
          onClick={handleLinkClick}
        >
          Artikel
        </Link>
        <span className="bg-black h-[1px] mx-6"></span>
        {isLogged ? (
          <Link
            href="/user"
            className="py-2 mx-6 mt-4 text-center bg-color1 hover:bg-opacity-[0.85] text-color5 rounded-md"
            onClick={handleLinkClick}
          >
            Profil
          </Link>
        ) : (
          <Link
            href="auth/login"
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
