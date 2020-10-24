import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { generateDummyRead } from './dummy';
import { Carousel } from 'antd';

import './index.css';

import { ContentContainer } from './style';

const StyledCarousel = styled(Carousel)``;

const ReadComponent = ({ history }) => {
  const [readList, setReadList] = useState(null);

  useEffect(() => {
    const response = generateDummyRead(4);
    setReadList(response);
  }, []);

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
    <StyledCarousel autoplay dotPosition={'top'}>
      <div>{sliderItems(readList[0])}</div>
      <div>{sliderItems(readList[1])}</div>
      <div>{sliderItems(readList[2])}</div>
      <div>{sliderItems(readList[3])}</div>
    </StyledCarousel>
  );
};

export default withRouter(ReadComponent);
