'use client'

// import Link from "next/link";
import {useState} from "react";
import ProfilePostCard from "@/components/ProfilePostCard";
import posts from "@/lib/dummyData";

export default function Page() {
  const [activeTab, setActiveTab] = useState("postingan");

  return (
    <div>
      <div className="flex my-2 lg:px-72 px-10 pb-4 gap-2 border-b-[1px] lg:text-base text-xs font-medium justify-between">
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

      <div className="flex flex-col lg:pb-6 px-6 lg:pt-8 pt-4 rounded-b-md bg-color5">
        {activeTab === "postingan" && posts.map((post) => (
          <ProfilePostCard key={post.id} post={post}/>
        ))}
        {/*{activeTab === "laporan" && <Laporan/>}*/}
      </div>

    </div>
  )
}