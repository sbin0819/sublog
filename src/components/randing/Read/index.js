import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { generateDummyRead } from './dummy';
import { Carousel } from 'antd';

// const Container = styled.div`
//   height: calc(100vh - 175px);
//   display: flex;
//   overflow-x: scroll;
//   ::-webkit-scrollbar {
//     display: none;
//   }
// `;

const ContentContainer = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 100vw;
  .title {
    position: absolute;
    top: 100px;
    left: 20px;
    width: 220px;
    background-color: black;
    color: white;
    font-size: 25px;
  }
`;

const ReadComponent = ({ history }) => {
  const [readList, setReadList] = useState(null);

  useEffect(() => {
    if (!readList) {
      const response = generateDummyRead(5);
      setReadList(response);
    }
  }, [readList]);

  if (!readList) return <h1>로딩 중...</h1>;

  const onClick = (id, data) => {
    history.push({
      pathname: `/read/${id}`,
      state: { article: data },
    });
  };

  const sliderItems = (data) => {
    return (
      <>
        <ContentContainer key={data.id} onClick={() => onClick(data.id, data)}>
          <img src={data.Images[0].src} />
          <div className='title'>{data.title}</div>
        </ContentContainer>
      </>
    );
  };

  return (
    <Carousel autoplay dotPosition={'top'}>
      <div>{sliderItems(readList[0])}</div>
      <div>{sliderItems(readList[1])}</div>
      <div>{sliderItems(readList[2])}</div>
      <div>{sliderItems(readList[3])}</div>
      <div>{sliderItems(readList[4])}</div>
    </Carousel>
  );
};

export default withRouter(ReadComponent);
