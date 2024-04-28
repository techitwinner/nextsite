import Search from "@/app/components/Search";
import { getAllPosts } from "@/app/functions/getAllPosts";
import { calculateTagFrequency } from "@/app/functions/getAllTags";
import { getTagFilteredPosts } from "@/app/functions/tagFilteredPosts";
import { Article } from "@/app/lib/types";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug); // Decode URL-encoded string
  const tagFilteredPosts = await getTagFilteredPosts({ slug: decodedSlug });
  const publishedPosts: Article[] = await getAllPosts();
  const tagFrequencyMap = await calculateTagFrequency({ publishedPosts });

  return (
    <div className="max-w-5xl m-auto p-4 min-h-screen">
      <Search
        publishedPosts={tagFilteredPosts}
        tagFrequencyMap={tagFrequencyMap}
      />
    </div>
  );
}
