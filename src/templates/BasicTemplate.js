import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  background: #f6f5f6;
  min-height: calc(100vh - 125px);
  overflow: scroll;
`;

const BasicTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      <Col xs={24} md={6}>
        <Container>{children}</Container>
      </Col>
      <Footer />
    </div>
  );
};

export default BasicTemplate;
