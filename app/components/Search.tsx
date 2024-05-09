"use client";

import { Input } from "@/app/components/input";
import { Article, TagFrequencyMap } from "@/app/lib/types";
import { useState } from "react";
import Tags from "./Tags";
import { useParams } from "next/navigation";
import Feed from "./Feed";

const Search = ({
  publishedPosts,
  tagFrequencyMap,
}: {
  publishedPosts: Article[];
  tagFrequencyMap: TagFrequencyMap;
}) => {
  const [searchValue, setSearchValue] = useState("");

  const params = useParams();
  const { slug } = params;

  const normalizedSlug = typeof slug === "string" ? slug.replace(/%20/g, " ") : slug;
  const filteredBlogPosts = publishedPosts.filter((post) => {
    const tagContent = post.tags ? post.tags.join(" ") : "";
    const searchContent = post.title + post.summary + tagContent;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <div className="mb-5 w-full">
        <Input
          className="search"
          placeholder={slug ? `Search in #${normalizedSlug}` : "Search Articles"}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div className="mb-5 self-start">
        <Tags tagFrequencyMap={tagFrequencyMap} />
      </div>

      {!filteredBlogPosts.length && (
        <p className="text-center">No posts found.</p>
      )}

      <Feed articles={filteredBlogPosts} />
    </>
  );
};

export default Search;
