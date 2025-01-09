import { Article } from "@/lib/types";
import Image from "next/image";
import exampleImg from "../../public/images/example-banjir-kanal.png";
import { LuMessageCircleMore } from "react-icons/lu";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="w-full flex flex-col justify-center py-3 lg:py-16 px-8 lg:px-24 gap-5 lg:gap-11 bg-color5">
      <div id="article-post" className="flex flex-col-reverse lg:grid lg:grid-cols-2 my-4 lg:my-0">
        {/* image */}
        <Image src={exampleImg} alt="leadership" className="my-3 lg:my-0 rounded-lg w-full h-fit lg:w-[570px] lg:h-[320px]" />
        {/* content */}
        <div className="flex flex-col gap-2 lg:gap-3 self-center">
          {/* title & posted */}
          <div className="flex flex-row justify-between">
            <h4 className="text-lg lg:text-2xl font-bold">{article.title}</h4>
            <p className="text-xs self-center">{article.posted}</p>
          </div>
          {/* description */}
          <p className="text-xs lg:text-sm font-medium self-center">{article.description}</p>
          <div className="hidden w-fit lg:flex flex-row gap-1 px-3 py-1 bg-color1 hover:bg-green-500 rounded-lg text-white text-[10px] cursor-pointer">
            <LuMessageCircleMore size={14} />
            <h6 className="self-center">{article.commentsCount}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
