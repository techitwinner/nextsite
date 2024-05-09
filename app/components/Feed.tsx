import { Article } from '../lib/types';
import ArticleCard from './ArticleCard';

type Props = {
  articles: Article[];
};

export default function ArticleList({ articles }: Props) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-3 w-full">
      {articles && articles.map(article => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
}

