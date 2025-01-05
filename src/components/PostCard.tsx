import { Plus, MoreHorizontal } from "@geist-ui/icons";
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
          Ikuti <Plus size={14} />
        </button>
      </div>

      {/* Post tags */}
      <div className="flex w-full gap-2">
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
      <div className="flex w-full gap-2">
        <div className="flex bg-color1 py-1 rounded-lg font-light text-xs text-color7">
          <div className="px-2 h-full">{formatNumber(post.upvotes)}</div>
          <div className="px-2 border-l">v</div>
        </div>
        <div className="bg-color1 px-2 py-1 rounded-lg font-light text-xs text-color7">
          c {formatNumber(post.commentsCount)}
        </div>
        <MoreHorizontal className="ml-auto" />
      </div>
    </div>
  );
}
