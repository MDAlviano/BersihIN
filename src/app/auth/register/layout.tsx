import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Daftar ke BersihIN",
};

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
        </section>
    );
}