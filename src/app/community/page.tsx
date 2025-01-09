"use client";

import PostCard from "@/components/PostCard";
import { useState } from "react";
import posts from "@/lib/dummyData";
import Link from "next/link";

export default function Page() {
  const [activeTab, setActiveTab] = useState("terbaru");

  return (
    <div>
      {/* Tab nav */}
      <div className="flex bg-color7 border-b border-color2">
        <button
          className={`${
            activeTab === "terbaru" ? "border-b-2 border-color2" : "border-none"
          } w-full py-3 px-4 text-sm font-semibold text-color2`}
          onClick={() => {
            setActiveTab("terbaru");
          }}
        >
          Terbaru
        </button>
        <button
          className={`${
            activeTab === "diikuti" ? "border-b-2 border-color2" : "border-none"
          } w-full py-3 px-4 text-sm font-semibold text-color2`}
          onClick={() => {
            setActiveTab("diikuti");
          }}
        >
          Diikuti
        </button>
      </div>
      {/* Add post */}
      <div className="flex px-6 py-3 mb-4 gap-2 items-center bg-color8">
        <span className="p-4 rounded-full bg-slate-400"></span>
        <Link href="/community/new" className="w-full px-2 py-2 text-start text-sm font-light rounded-md border border-color2 bg-color7">
          Ingin membagikan sesuatu?
        </Link>
      </div>

      {/* Main */}
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            // href={`community/${post.id}`}
            key={post.id}
            href="community/post/detail"
            className="flex flex-col"
          >
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}
