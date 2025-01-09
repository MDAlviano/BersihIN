import { Article } from "@/lib/types";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="flex flex-col py-4 px-6 my-2 gap-2 bg-color8">
      {/* Title */}
      <h1 className="font-semibold line-clamp-2">{article.title}</h1>

      {/* Posted */}
      <h6 className="text-xs">{article.posted}</h6>

      {/* Desc */}
      <p className="line-clamp-3 text-sm">{article.description}</p>

      {/* Image */}
      <span className="w-full h-48 bg-slate-400">image</span>
    </div>
  );
}
