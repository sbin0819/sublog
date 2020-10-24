import React, { useState, useEffect } from 'react';
import { generateDummyRead } from './dummy';
import { Carousel } from 'antd';
import './index.css';
import ReadItem from './ReadItem';

const ReadComponent = () => {
  const [readList, setReadList] = useState(null);
  useEffect(() => {
    const response = generateDummyRead(4);
    setReadList(response);
  }, []);
  if (!readList) return <h1>로딩 중...</h1>;
  return (
    <Carousel dotPosition={'top'}>
      {readList.map((read) => (
        <ReadItem key={read.id} read={read} />
      ))}
    </Carousel>
  );
};

export default ReadComponent;
