"use client";

import { Article } from '@/app/lib/types';
import slugify from 'slugify';
import getLocalizedDate from '@/app/utils/getLocalizedDate';
import Link from "next/link";
import Image from "next/image"

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  const slug = slugify(article.slug).toLowerCase();

  const formattedTime = getLocalizedDate(article.date);

  const handleButtonClick = (link: string) => {
    if (typeof window !== 'undefined') {
        window.location.href = link;
    }
  };

  return (
    <div className="flex flex-col cursor-pointer card click" onClick={() => handleButtonClick(`/blog/${slug}?id=${article.id}`)}>
      <section className="gap-3 items-start card-header">
        <div className='flex flex-col gap-2'>
          <div className=" filter contrast-[0.9]">
            <img
              className="object-cover w-full transition rounded-lg aspect-video group-hover:opacity-90"
              src={article.coverImage}
              alt={'article cover'}
            />
          </div>
          <div className="flex flex-row gap-1">
            {article?.tags?.map(tag => (
              <a className="chip" key={tag}>
                {tag}
              </a>
            ))}
          </div>            
        </div>
      </section>
      <hr/>
      <section className="flex flex-col justify-between items-start card-footer-col">
        <div className="flex-1">
          <p className="text-xl font-semibold ">{article.title}</p>
          <p className="text-base line-clamp-2">{article.summary}</p>
        </div>
        <div className="flex items-center">
          <div className="flex space-x-1 text-sm">
            {article.tags.map(tag => (
              <div key={tag}>
                <span className="font-semibold">{tag} </span>
                <span aria-hidden="true">&middot;</span>
              </div>
            ))}
            <time dateTime={formattedTime}>{formattedTime}</time>
          </div>
          {/* <p className="text-sm font-medium text-gray-900">{article?.author?.name}</p> */}
        </div>
      </section>
    </div>
  );
}
