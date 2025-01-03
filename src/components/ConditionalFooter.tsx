"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  const excludedRoutes = ["/auth", "/auth/login", "/auth/register"];
  const isExcluded = excludedRoutes.some((route) => pathname.startsWith(route));

  return !isExcluded ? <Footer /> : null;
}
