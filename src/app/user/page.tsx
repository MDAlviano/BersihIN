"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosMore } from "react-icons/io";
import exampleImg from "../../../public/images/example-banjir-kanal.png";
import Image from "next/image";
import ProfilePostCard from "@/components/ProfilePostCard";
import posts from "@/lib/dummyData";

function Laporan() {
  const laporanData = [
    { id: 1, title: "100kg sampah plastik", time: "1 jam yang lalu" },
    { id: 2, title: "50kg sampah kertas", time: "2 jam yang lalu" },
  ];

  return (
    <div>
      {laporanData.map((laporan) => (
        <Link key={laporan.id} href={`/laporan/${laporan.id}`}>
          <div className="flex my-3 lg:my-7 lg:gap-2">
            <Image
              src={exampleImg}
              alt="example image"
              className="size-1/2 rounded-lg"
            />
            <div className="flex flex-col flex-1 my-5 mx-4">
              <h5 className="lg:text-xl text-xs font-semibold">
                {laporan.title}
              </h5>
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
  const [activeTab, setActiveTab] = useState("postingan");

  return (
    <main className="lg:px-20 p-6">
      <div className="flex flex-col lg:px-24 lg:pt-12 px-6 pt-6 rounded-t-md bg-color5 shadow-lg border-b-2">
        <div className="flex lg:justify-center lg:gap-52 pb-5 gap-10">
          {/* Foto profil */}
          <div className="lg:w-40 lg:h-40 w-20 h-20 items-center bg-color1 rounded-full"></div>
          <div className="flex items-center justify-between lg:pl-8 lg:gap-8 gap-4">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-xl lg:text-3xl">9</h3>
              <p className="lg:text-lg text-xs">Postingan</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-xl lg:text-3xl">186</h3>
              <p className="lg:text-lg text-xs">Pengikut</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-xl lg:text-3xl">12</h3>
              <p className="lg:text-lg text-xs">Laporan</p>
            </div>
          </div>
        </div>

        <div className="lg:px-36">
          <div>
            <h2 className="font-semibold lg:text-xl text-sm">
              Inspektur Alviano Sigmatus
            </h2>
            <p className="font-light lg:text-lg text-xs">@sigmavin</p>
            <p className="pt-1 lg:text-lg text-xs">
              Inspektur kebersihan lokal area Gayamsari
            </p>
          </div>
          <div className="flex lg:my-5 my-3 lg:text-base text-[11px] lg:gap-5 gap-2">
            <button
              id="follow-btn"
              className="bg-none border-2 hover:bg-color1 hover:text-white transition duration-150 border-color1 rounded-xl w-full text-color1 font-semibold"
            >
              Ikuti
            </button>
            <button
              id="more-btn"
              className="w-fit p-[6px] lg:p-2 bg-color1 hover:opacity-80 transition duration-100 rounded-xl"
            >
              <IoIosMore color="#fff" />
            </button>
          </div>
        </div>

        <div className="flex my-2 lg:px-72 px-10 gap-2 lg:text-base text-xs font-medium justify-around lg:justify-between">
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
        {activeTab === "postingan" && posts.map((post) => (
          <ProfilePostCard key={post.id} post={post}/>
        ))}
        {activeTab === "laporan" && <Laporan />}
      </div>
    </main>
  );
}

// "use client";

// import ProfilePostCard from "@/components/ProfilePostCard";
// import Link from "next/link";
// import { useState } from "react";
// import posts from "@/lib/dummyData";

// const Laporan = () => {
//   return (
//     <div>
//       <div className="flex pb-4 gap-2">
//         <h4 className="w-24">Foto</h4>
//         <div className="flex flex-col flex-1">
//           <h5 className="text-[10px] font-semibold pb-1 border-b-2">
//             100kg sampah plastik
//           </h5>
//           <p className="text-[8px] ">1 jam yang lalu</p>
//           <p className="pt-3 text-[10px]">Baca selengkapnya...</p>
//         </div>
//       </div>

//       <div className="flex pb-4 gap-2">
//         <h4 className="w-24">Foto</h4>
//         <div className="flex flex-col flex-1">
//           <h5 className="text-[10px] font-semibold pb-1 border-b-2">
//             100kg sampah plastik
//           </h5>
//           <p className="text-[8px] ">1 jam yang lalu</p>
//           <p className="pt-3 text-[10px]">Baca selengkapnya...</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function Page() {
//   const [activeTab, setActiveTab] = useState("postingan");
//   const [showAllPosts, setShowAllPosts] = useState(false);

//   const MAX_POSTS = 3;

//   return (
//     <main className="p-6">
//       <div className="flex flex-col px-6 pt-6 rounded-t-md bg-color5 shadow-lg border-b-2">
//         <div className="flex pb-5 gap-4">
//           {/* Foto profil */}
//           <div className="w-20 h-20 items-center bg-color1 rounded-full">
//             profil
//           </div>
//           <div className="flex items-center justify-between gap-4">
//             <div className="flex flex-col items-center">
//               <h3 className="font-semibold">9</h3>
//               <p className="text-xs">Postingan</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <h3 className="font-semibold">186</h3>
//               <p className="text-xs">Pengikut</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <h3 className="font-semibold">12</h3>
//               <p className="text-xs">Laporan</p>
//             </div>
//           </div>
//         </div>

//         <div>
//           <h2 className="font-semibold text-sm">Inspektur Alviano Sigmatus</h2>
//           <p className="font-light text-xs">@sigmavin</p>
//           <p className="pt-1 text-xs">
//             Inspektur kebersihan lokal area Gayamsari
//           </p>
//         </div>

//         <div className="flex my-3 text-[11px] gap-2">
//           <Link href="">Edit Profil</Link>
//           <Link href="" className="text-red-500">
//             Keluar
//           </Link>
//         </div>

//         <div className="flex my-2 px-10 gap-2 text-xs font-medium justify-between">
//           <p
//             className={`cursor-pointer ${
//               activeTab === "postingan" ? "text-blue-500" : "text-gray-500"
//             }`}
//             onClick={() => setActiveTab("postingan")}
//           >
//             Postingan
//           </p>
//           <p
//             className={`cursor-pointer ${
//               activeTab === "laporan" ? "text-blue-500" : "text-gray-500"
//             }`}
//             onClick={() => setActiveTab("laporan")}
//           >
//             Laporan
//           </p>
//         </div>
//       </div>

//       <div className="flex flex-col px-6 pt-4 rounded-b-md bg-color5 shadow-lg">
//         {activeTab === "postingan" && (
//           <div className="grid grid-rows-2 gap-4">
//             {(!showAllPosts ? posts.slice(0, MAX_POSTS) : posts).map((post) => (
//               <ProfilePostCard key={post.id} post={post} />
//             ))}
//             {posts.length > MAX_POSTS && !showAllPosts && (
//               <button
//                 className="text-blue-500 mt-4 underline"
//                 onClick={() => setShowAllPosts(true)}
//               >
//                 Lihat Semua
//               </button>
//             )}
//             {showAllPosts && (
//               <button
//                 className="text-blue-500 mt-4 underline"
//                 onClick={() => setShowAllPosts(false)}
//               >
//                 Tampilkan Lebih Sedikit
//               </button>
//             )}
//           </div>
//         )}
//         {activeTab === "laporan" && <Laporan />}
//       </div>
//     </main>
//   );
// }
