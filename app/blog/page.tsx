import { getAllPosts } from "@/app/functions/getAllPosts";
import { Article } from "@/app/lib/types";
import Search from "@/app/components/Search";
import { calculateTagFrequency } from "@/app/functions/getAllTags";

const Articles = async () => {
  const publishedPosts: Article[] = await getAllPosts();
  const tagFrequencyMap = await calculateTagFrequency({ publishedPosts });

  return (
    <div className="max-w-5xl m-auto p-4 min-h-screen">
      <Search
        publishedPosts={publishedPosts}
        tagFrequencyMap={tagFrequencyMap}
      />
    </div>
  );
};

export default Articles;

