"use client";

import Link from "next/link";
import { useState } from "react";
import exampleImg from "../../../../../public/images/example-banjir-kanal.png";
import Image from "next/image";

function Pending() {
  const laporanData = [
    { id: 1, title: "100kg sampah plastik", time: "1 jam yang lalu", status: "Pending" },
    { id: 2, title: "100kg sampah plastik", time: "1 hari yang lalu", status: "Pending" },
    { id: 3, title: "100kg sampah plastik", time: "18 jam yang lalu", status: "Pending" },
  ];

  return (
    <div>
      {laporanData.map((laporan) => (
        <Link key={laporan.id} href={`/laporan/${laporan.id}`}>
          <div className="flex my-3 lg:my-7 lg:gap-2">
            <Image src={exampleImg} alt="example image" className="size-1/2 rounded-lg" />
            <div className="flex flex-col flex-1 my-5 mx-4">
              <div className="flex flex-row justify-between">
                <h5 className="lg:text-xl text-xs font-semibold">{laporan.title}</h5>
                <div id="pending-icon" className="bg-[#3D8CCD] rounded-2xl w-fit hidden lg:flex flex-row gap-2 py-1 px-3 items-center">
                  <span className="w-[10px] h-[10px] rounded-full bg-[#3EA5FF]"></span>
                  <h6 className="text-[9px] text-[#CFE9FF]">{laporan.status}</h6>
                </div>
              </div>
              <span className="my-2 h-[1px] bg-[#D9D9D9] w-full"></span>
              <p className="lg:text-xs text-[8px]">{laporan.time}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function Rejected() {
  const laporanData = [
    { id: 1, title: "100kg sampah plastik", time: "1 jam yang lalu", status: "Ditolak" },
    { id: 2, title: "100g sampah plastik", time: "10 jam yang lalu", status: "Ditolak" },
    { id: 3, title: "5kg botol plastik", time: "1 hari yang lalu", status: "Ditolak" },
  ];

  return (
    <div>
      {laporanData.map((laporan) => (
        <Link key={laporan.id} href={`/laporan/${laporan.id}`}>
          <div className="flex my-3 lg:my-7 lg:gap-2">
            <Image src={exampleImg} alt="example image" className="size-1/2 rounded-lg" />
            <div className="flex flex-col flex-1 my-5 mx-4">
              <div className="flex flex-row justify-between">
                <h5 className="lg:text-xl text-xs font-semibold">{laporan.title}</h5>
                <div id="pending-icon" className="bg-red-500 rounded-2xl w-fit hidden lg:flex flex-row gap-2 py-1 px-3 items-center">
                  <span className="w-[10px] h-[10px] rounded-full bg-red-700"></span>
                  <h6 className="text-[9px] text-red-100">{laporan.status}</h6>
                </div>
              </div>
              <span className="my-2 h-[1px] bg-[#D9D9D9] w-full"></span>
              <p className="lg:text-xs text-[8px]">{laporan.time}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function Confirmed() {
  const laporanData = [
    { id: 1, title: "100kg sampah plastik", time: "1 hari yang lalu", status: "Diterima" },
    { id: 2, title: "50g botol plastik", time: "5 jam yang lalu", status: "Diterima" },
    { id: 3, title: "1kg sampah plastik", time: "10 jam yang lalu", status: "Diterima" },
  ];

  return (
    <div>
      {laporanData.map((laporan) => (
        <Link key={laporan.id} href={`/laporan/${laporan.id}`}>
          <div className="flex my-3 lg:my-7 lg:gap-2">
            <Image src={exampleImg} alt="example image" className="size-1/2 rounded-lg" />
            <div className="flex flex-col flex-1 my-5 mx-4">
              <div className="flex flex-row justify-between">
                <h5 className="lg:text-xl text-xs font-semibold">{laporan.title}</h5>
                <div id="pending-icon" className="bg-[#64DF98] rounded-2xl w-fit hidden lg:flex flex-row gap-2 py-1 px-3 items-center">
                  <span className="w-[10px] h-[10px] rounded-full bg-color1"></span>
                  <h6 className="text-[9px] text-color8">{laporan.status}</h6>
                </div>
              </div>
              <span className="my-2 h-[1px] bg-[#D9D9D9] w-full"></span>
              <p className="lg:text-xs text-[8px]">{laporan.time}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Page() {
  const [activeTab, setActiveTab] = useState("pending");

  return (
    <main className="lg:px-20 p-6">
      <div className="flex flex-col lg:px-24 lg:pt-12 px-6 pt-6 rounded-t-md bg-color5 shadow-lg border-b-2">
        <div id="info-wilayah" className="m-4 lg:m-6">
          <h4 className="text-2xl lg:text-4xl font-medium">Area:</h4>
          <h1 className="text-4xl lg:text-6xl font-semibold">Gayamsari</h1>
        </div>

        <div className="flex my-5 lg:px-72 px-10 gap-2 lg:text-base text-xs font-medium justify-around lg:justify-between">
          <p className={`cursor-pointer ${activeTab === "pending" ? "text-blue-500" : "text-gray-500"}`} onClick={() => setActiveTab("pending")}>
            Pending
          </p>
          <p className={`cursor-pointer ${activeTab === "rejected" ? "text-blue-500" : "text-gray-500"}`} onClick={() => setActiveTab("rejected")}>
            Ditolak
          </p>
          <p className={`cursor-pointer ${activeTab === "confirmed" ? "text-blue-500" : "text-gray-500"}`} onClick={() => setActiveTab("confirmed")}>
            Diterima
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:px-60 lg:pb-6 px-6 lg:pt-8 pt-4 rounded-b-md bg-color5 shadow-lg">
        {activeTab === "pending" && <Pending />}
        {activeTab === "rejected" && <Rejected />}
        {activeTab === "confirmed" && <Confirmed />}
      </div>
    </main>
  );
}
