import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  margin-bottom: 25px;
  gap: 10px;
  .left {
    img {
      display: block;
      width: 160px;
      height: 150px;
    }
  }
  .right {
    overflow: hidden;
    h2 {
      margin: 0;
    }
    p {
      margin-top: 10px;
    }
  }
`;

function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article;
  return (
    <Container>
      <div className='left'>
        <img src={urlToImage} />
      </div>
      <div className='right'>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </Container>
  );
}

export default NewsItem;
