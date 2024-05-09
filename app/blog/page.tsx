import { getAllPosts } from "@/app/functions/getAllPosts";
import { Article } from "@/app/lib/types";
import Search from "@/app/components/Search";
import { calculateTagFrequency } from "@/app/functions/getAllTags";

const Articles = async () => {
  const publishedPosts: Article[] = await getAllPosts();
  const tagFrequencyMap = await calculateTagFrequency({ publishedPosts });

  return (
      <div className={"flex flex-col w-full min-h-screen items-center px-4 py-8 max-w-[1024px] self-center"}>
          <Search
              publishedPosts={publishedPosts}
              tagFrequencyMap={tagFrequencyMap}
          />
      </div>
  );
};

export default Articles;

