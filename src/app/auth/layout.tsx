import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autentikasi - BersihIN",
  description: "Masuk dengan akun Anda, atau daftarkan akun baru.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <main>{children}</main>
  );
}
