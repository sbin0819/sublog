import React from 'react';
import CategoryList from './categoryList';
import NewsList from './newsList';

const NewsComponent = () => {
  return (
    <div>
      <CategoryList />
      <NewsList />
    </div>
  );
};

export default NewsComponent;
