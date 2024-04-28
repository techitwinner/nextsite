import { Article } from '@/app/lib/types';
import slugify from 'slugify';
import getLocalizedDate from '@/app/utils/getLocalizedDate';
import {Chip,Link,Card,Divider,CardFooter,CardHeader} from "@nextui-org/react";
import Image from "next/image"

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  const slug = slugify(article.slug).toLowerCase();

  const formattedTime = getLocalizedDate(article.date);

  return (
    <Link color={"foreground"} href={`/blog/articles/${slug}?id=${article.id}`}>
      <Card className="flex flex-col overflow-hidden cursor-pointer group">
        <CardHeader className="flex flex-col gap-3 items-start">
          <div className=" filter contrast-[0.9]">
            <img
              className="object-cover w-full transition rounded-lg aspect-video group-hover:opacity-90 bg-gray-50"
              src={article.coverImage}
              alt={'article cover'}
            />
          </div>
          <div className="flex flex-row gap-1">
            {article?.tags?.map(tag => (
              <Chip key={tag}>
                {tag}
              </Chip>
            ))}
          </div>
        </CardHeader>
        <Divider/>
        <CardFooter className="flex flex-col justify-between items-start flex-1 py-4">
          <div className="flex-1">
            <p className="text-xl font-semibold ">{article.title}</p>
            <p className="mt-3 text-base line-clamp-2">{article.summary}</p>
          </div>
          <div className="flex items-center mt-4">
            <div className="flex mb-2 space-x-1 text-sm">
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
        </CardFooter>
      </Card>
    </Link>
  );
}
