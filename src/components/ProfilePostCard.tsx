import { Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProfilePostCardProps {
  post: Post;
}

export default function ProfilePostCard({ post }: ProfilePostCardProps) {
  return (
    <>
      <div className="flex pb-4 gap-2">
        <Image
          className="w-24 h-full max-h-fit object-fill"
          src=""
          alt="Foto postingan"
        ></Image>
        <div className="flex flex-col flex-1">
          <h5 className="text-[10px] font-semibold pb-1 border-b-2">
            {post.title}
          </h5>
          <p className="text-[8px] ">19 jam yang lalu</p>
          <Link href={`post/${post.id}`} className="pt-3 text-[10px]">
            Baca selengkapnya...
          </Link>
        </div>
      </div>
    </>
  );
}
