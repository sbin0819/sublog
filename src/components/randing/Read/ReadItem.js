import React from 'react';
import { withRouter } from 'react-router-dom';
import { ContentContainer } from './style';

const ReadItem = ({ history, read }) => {
  const onClick = (id, data) => {
    history.push({
      pathname: `/read/${id}`,
      state: { article: data },
    });
  };
  return (
    <ContentContainer onClick={() => onClick(read.id, read)}>
      <img src={read.Images[0].src} />
      <div className='title'>{read.title}</div>
    </ContentContainer>
  );
};

export default withRouter(ReadItem);
