import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 30px 15px;
  margin-bottom: 80px;
  .title {
    font-size: 25px;
    margin-bottom: 20px;
    font-weight: bold;
    word-break: break-all;
  }
  .content {
    font-size: 18px;
    line-height: 1.5;
    word-break: break-all;
  }
  .footer {
    margin-top: 20px;
    font-size: 18px;
    font-style: italic;
    font-weight: bold;
  }
`;

const Article = ({ location }) => {
  const { article } = location.state;
  if (!article) return <Redirect to='/' />;
  return (
    <Container>
      <h1 className='title'>{article.title}</h1>
      <p className='content'>{article.content}</p>
      <p className='footer'>Written By {article.User.nickname}</p>
    </Container>
  );
};

export default withRouter(Article);
