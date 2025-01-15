"use client";

import { SignOutAction } from "@/lib/action";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter

const ProfileButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await SignOutAction(); // Panggil fungsi sign out
    router.push("/auth/login"); // Redirect ke halaman login
  };

  return (
    <div className="flex lg:my-5 my-3 lg:text-base text-[11px] lg:gap-8 gap-2">
      <Link href="/dashboard/edit">Edit Profil</Link>
      <button className="text-red-500" onClick={handleSignOut}>
        Keluar
      </button>
    </div>
  );
};

export default ProfileButton;
