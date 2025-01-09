import { Post } from "@/lib/types";
import Image from "next/image";
import React from "react";
import exampleImg from "../../public/images/example-banjir-kanal.png";

interface ProfilePostCardProps {
  post: Post;
}

export default function ProfilePostCard({ post }: ProfilePostCardProps) {
  return (
    <>
      <div>
        <div className="flex my-3 lg:my-7 lg:gap-2">
          <Image
            src={exampleImg}
            alt="example image"
            className="size-1/2 rounded-lg"
          />
          <div className="flex flex-col flex-1 my-5 mx-4">
            <h5 className="lg:text-xl text-xs font-semibold">
              {post.title}
            </h5>
            <span className="my-2 h-[1px] bg-[#D9D9D9] w-full"></span>
            <p className="lg:text-xs text-[8px] ">{post.posted}</p>
          </div>
        </div>
      </div>
    </>
  );
}
