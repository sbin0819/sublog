import React from 'react';
import NewsItem from './newsItem';
import useNewsAPI from '../../hooks/useNewsAPI';

export default function () {
  const articles = useNewsAPI();

  if (!articles) return <h1>로딩 중</h1>;

  return (
    <div>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
}
