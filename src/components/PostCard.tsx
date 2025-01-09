import { IoIosAdd, IoIosMore } from "react-icons/io";
import { TbTriangle } from "react-icons/tb";
import { FaRegComment } from "react-icons/fa6";
import { Post } from "@/lib/types";

interface PostCardProps {
  post: Post;
}

function formatNumber(number: number) {
  if (number >= 1000 && number < 1000000 && number < 1000000000) {
    return (number / 1000).toFixed(1).replace(".", ",") + "rb";
  } else if (number >= 1000000 && number < 1000000000) {
    return (number / 1000000).toFixed(1).replace(".", ",") + "jt";
  } else if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1).replace(".", ",") + "m";
  }
  return number;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="flex flex-col py-4 px-6 my-2 gap-2 bg-color8">
      {/* Post head */}
      <div className="flex w-full items-center">
        <div className="flex w-full">
          <span className="p-6 bg-slate-400 rounded-full"></span>
          <div className="flex flex-col w-full px-3">
            <h4 className="font-semibold line-clamp-1">{post.user}</h4>
            <h6 className="text-xs">{post.posted}</h6>
          </div>
        </div>
        <button className="flex w-fit max-h-fit px-2 py-1 gap-1 items-center text-xs text-color7 bg-color1 rounded-md border-2 border-color6">
          Ikuti <IoIosAdd size={14} />
        </button>
      </div>

      {/* Post tags */}
      <div className="flex w-full gap-2 mt-2">
        <div className="bg-color1 px-2 py-[3px] rounded-lg font-light text-xs text-color7">
          Test
        </div>
        <div className="bg-color1 px-2 py-[3px] rounded-lg font-light text-xs text-color7">
          Test
        </div>
        <div className="bg-color1 px-2 py-[3px] rounded-lg font-light text-xs text-color7">
          Test
        </div>
      </div>

      {/* Title */}
      <h1 className="font-semibold line-clamp-2">{post.title}</h1>

      {/* Desc */}
      <p className="line-clamp-3 text-sm">{post.description}</p>

      {/* Image */}
      <span className="w-full h-48 bg-slate-400">image</span>

      {/* Action bar */}
      <div className="flex w-full gap-2 pt-2 items-center">
        <div className="flex bg-color1 py-1 rounded-lg font-light text-xs text-color7">
          <div className="flex px-2 h-full items-center gap-1"><TbTriangle /> {formatNumber(post.upvotes)}</div>
          <div className="flex px-2 border-l items-center"><TbTriangle className="rotate-180" /></div>
        </div>
        <div className="flex gap-1 items-center bg-color1 px-2 py-1 rounded-lg font-light text-xs text-color7">
          <FaRegComment /> {formatNumber(post.commentsCount)}
        </div>
        <IoIosMore className="ml-auto" />
      </div>
    </div>
  );
}
