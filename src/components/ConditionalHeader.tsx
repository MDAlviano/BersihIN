"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ConditionalHeader() {
  const pathname = usePathname();
  const excludedRoutes = ["/auth", "/auth/login", "/auth/register"];
  const isExcluded = excludedRoutes.some((route) => pathname.startsWith(route));

  return !isExcluded ? <Header /> : null; // Tampilkan Header jika bukan excluded route
}
