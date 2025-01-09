'use server'

import {auth} from "@/../auth";
import Link from "next/link";
import UserProfile from "@/components/UserProfilePost&Report";

const Page= async () => {
  const session = await auth()

  return (
    <main className="lg:px-20 p-6">
      <div className="flex flex-col lg:px-24 lg:pt-12 px-6 pt-6 rounded-t-md bg-color5 shadow-lg border-b-2">
        {/* User Profile Detail */}
        <div className="flex lg:justify-center lg:gap-60 pb-5 gap-4">
          {/* Foto profil */}
          <div className="lg:w-40 lg:h-40 w-20 h-20 items-center bg-color1 rounded-full">
          </div>
          <div className="flex items-center justify-between lg:pl-8 lg:gap-8 gap-4">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold lg:text-2xl">9</h3>
              <p className="lg:text-lg text-xs">Postingan</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold lg:text-2xl">186</h3>
              <p className="lg:text-lg text-xs">Pengikut</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold lg:text-2xl">12</h3>
              <p className="lg:text-lg text-xs">Laporan</p>
            </div>
          </div>
        </div>

        <div className="lg:px-36">
          <div>
            {/*<h2 className="font-semibold lg:text-xl text-sm"></h2>*/}
            <p className="font-light lg:text-lg text-xs">{session?.user?.name}</p>
            {/*<p className="pt-1 lg:text-lg text-xs">Inspektur kebersihan lokal area Gayamsari</p>*/}
          </div>
          <div className="flex lg:my-5 my-3 lg:text-base text-[11px] lg:gap-8 gap-2">
            <Link href="/dashboard/edit">Edit Profil</Link>
            <Link href="/auth/signout" className="text-red-500">Keluar</Link>
          </div>
        </div>

        <UserProfile />
      </div>
    </main>
  )
}

export default Page