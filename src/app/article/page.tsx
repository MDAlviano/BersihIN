import ArticleCard from "@/components/ArticleCard";
import { article } from "@/lib/dummyData";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      {article.map((artic) => (
        <Link
          href={`article/detail/`}
          key={artic.id}
          className="flex flex-col"
        >
          <ArticleCard article={artic} />
        </Link>
      ))}
    </div>
  );
}
