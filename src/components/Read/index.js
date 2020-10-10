import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import { generateDummyRead } from './dummy';

// antd card

const Container = styled.div`
  background: lightpink;
  height: calc(100vh - 175px);
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 100vw;

  .title {
    position: absolute;
    top: 100px;
    left: 20px;
    width: 65%;
    background-color: black;
    color: white;
    font-size: 25px;
  }
`;

const ReadComponent = () => {
  const [readList, setReadList] = useState(null);

  useEffect(() => {
    if (!readList) {
      const response = generateDummyRead(5);
      setReadList(response);
    }
  }, [readList]);

  if (!readList) return <h1>로딩 중...</h1>;
  console.log(readList);
  return (
    <Container>
      {readList.map((data) => (
        <ContentContainer key={data.id}>
          <img src={data.Images[0].src} />
          <div className='title'>{data.title}</div>
        </ContentContainer>
      ))}
    </Container>
  );
};

export default ReadComponent;
