"use client"

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";
import ConditionalFooter from "@/components/ConditionalFooter";
import { AuthProvider } from "@/context/AuthContext";
import ToggleLogged from "@/components/ToggleLogged";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// export const metadata: Metadata = {
//   title: "BersihIN",
//   description: "Website komunitas kebersihan",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} antialiased bg-color7`}>
        <AuthProvider> {/* Temporary element for debugging and dev */}
          <ConditionalHeader />
          <main>{children}</main>
          <ConditionalFooter />
          <ToggleLogged />
        </AuthProvider>
      </body>
    </html>
  );
}
