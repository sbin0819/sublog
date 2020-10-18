import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  min-width: 220px;
  height: 130px;
  background: gold;
  margin-bottom: 25px;
`;

function NewsItem({ article }) {
  console.log(article);
  return (
    <Container>
      <div></div>
      <div></div>
    </Container>
  );
}

export default NewsItem;
