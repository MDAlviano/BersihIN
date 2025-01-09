import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login ke BersihIN",
};

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
        </section>
    );
}