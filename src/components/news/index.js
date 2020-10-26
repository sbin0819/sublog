import React from 'react';
import styled from 'styled-components';
import CategoryList from './categoryList';
import NewsList from './newsList';

const Container = styled.div`
  margin: 20px;
  margin-bottom: 120px;
`;

const NewsComponent = () => {
  return (
    <Container>
      <CategoryList />
      <NewsList />
    </Container>
  );
};

export default NewsComponent;
