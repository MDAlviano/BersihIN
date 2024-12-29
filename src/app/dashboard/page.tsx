'use client'

import Link from "next/link";
import { useState } from "react";

function Postingan() {
  return (
    <div>
      <div className="flex pb-4 gap-2">
        <h4 className="lg:w-44 w-24">Foto</h4>
        <div className="flex flex-col flex-1">
          <h5 className="lg:text-base text-[10px] font-semibold pb-1 border-b-2">Update kondisi banjir kanal saat
            ini</h5>
          <p className="lg:text-xs text-[8px] ">19 jam yang lalu</p>
          <p className="pt-3 lg:text-sm text-[10px]">Baca selengkapnya...</p>
        </div>
      </div>

      <div className="flex pb-4 gap-2">
        <h4 className="lg:w-44 w-24">Foto</h4>
        <div className="flex flex-col flex-1">
          <h5 className="lg:text-base text-[10px] font-semibold pb-1 border-b-2">Update kondisi banjir kanal saat
            ini</h5>
          <p className="lg:text-xs text-[8px] ">19 jam yang lalu</p>
          <p className="pt-3 lg:text-sm text-[10px]">Baca selengkapnya...</p>
        </div>
      </div>

      <div className="flex pb-4 gap-2">
        <h4 className="lg:w-44 w-24">Foto</h4>
        <div className="flex flex-col flex-1">
          <h5 className="lg:text-base text-[10px] font-semibold pb-1 border-b-2">Update kondisi banjir kanal saat
            ini</h5>
          <p className="lg:text-xs text-[8px] ">19 jam yang lalu</p>
          <p className="pt-3 lg:text-sm text-[10px]">Baca selengkapnya...</p>
        </div>
      </div>
    </div>
  )
}

function Laporan() {
  const laporanData = [
    { id: 1, title: "100kg sampah plastik", time: "1 jam yang lalu" },
    { id: 2, title: "50kg sampah kertas", time: "2 jam yang lalu" },
  ];

  return (
    <div>
      {laporanData.map((laporan) => (
        <div key={laporan.id} className="flex pb-4 gap-2">
          <h4 className="lg:w-44 w-24">Foto</h4>
          <div className="flex flex-col flex-1">
            <Link href={`/laporan/${laporan.id}`}>
              <h5 className="lg:text-base text-[10px] font-semibold pb-1 border-b-2 cursor-pointer">
                {laporan.title}
              </h5>
            </Link>
            <p className="lg:text-xs text-[8px]">{laporan.time}</p>
            <Link href={`/laporan/${laporan.id}`}>
              <p className="pt-3 lg:text-sm text-[10px] cursor-pointer">
                Baca selengkapnya...
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Page() {
  const [activeTab, setActiveTab] = useState("postingan");

  return (
    <main className="lg:px-20 p-6">
      <div className="flex flex-col lg:px-24 lg:pt-12 px-6 pt-6 rounded-t-md bg-color5 shadow-lg border-b-2">
        <div className="flex lg:justify-center lg:gap-60 pb-5 gap-4">
          {/* Foto profil */}
          <div className="lg:w-40 lg:h-40 w-20 h-20 items-center bg-color1 rounded-full">
            profil
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
            <h2 className="font-semibold lg:text-xl text-sm">Inspektur Alviano Sigmatus</h2>
            <p className="font-light lg:text-lg text-xs">@sigmavin</p>
            <p className="pt-1 lg:text-lg text-xs">Inspektur kebersihan lokal area Gayamsari</p>
          </div>
          <div className="flex lg:my-5 my-3 lg:text-base text-[11px] lg:gap-8 gap-2">
            <Link href="">Edit Profil</Link>
            <Link href="" className="text-red-500">Keluar</Link>
          </div>
        </div>

        <div className="flex my-2 lg:px-72 px-10 gap-2 lg:text-base text-xs font-medium justify-between">
          <p
            className={`cursor-pointer ${
              activeTab === "postingan" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("postingan")}
          >
            Postingan
          </p>
          <p
            className={`cursor-pointer ${
              activeTab === "laporan" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => setActiveTab("laporan")}
          >
            Laporan
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:px-60 lg:pb-6 px-6 lg:pt-8 pt-4 rounded-b-md bg-color5 shadow-lg">
        {activeTab === "postingan" && <Postingan/>}
        {activeTab === "laporan" && <Laporan/>}
      </div>
    </main>
  );
}