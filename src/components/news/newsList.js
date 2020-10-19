import React from 'react';
import styled from 'styled-components';
import NewsItem from './newsItem';
import useNewsAPI from '../../hooks/useNewsAPI';

const Container = styled.div`
  margin-top: 20px;
`;

export default function () {
  const articles = useNewsAPI();
  if (!articles) return <h1>로딩 중</h1>;
  return (
    <Container>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </Container>
  );
}
