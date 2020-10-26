import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Col } from 'antd';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const StyledMenu = styled(Menu)`
  display: flex;
  justify-content: space-around;
  padding: 20px 15px 10px 15px;
  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
  }
`;

const Container = styled.div`
  background: #f6f5f6;
  min-height: calc(100vh);
  /* margin-bottom: 125px; */
  overflow: scroll;
`;

const BasicTemplate = ({ children, location }) => {
  const checkPath = location.pathname;
  const isNeedMenu =
    checkPath === '/' ||
    checkPath === '/read' ||
    checkPath === '/watch' ||
    checkPath === '/listen';

  return (
    <div>
      <Header />
      {isNeedMenu && (
        <StyledMenu>
          <Menu.Item key='read'>
            <Link to='/read'>READ</Link>
          </Menu.Item>
          <Menu.Item key='watch'>
            <Link to='/watch'>WATCH</Link>
          </Menu.Item>
          <Menu.Item key='listen'>
            <Link to='/listen'>LISTEN</Link>
          </Menu.Item>
        </StyledMenu>
      )}
      <Col>
        <Container>{children}</Container>
      </Col>
      <Footer />
    </div>
  );
};

export default withRouter(BasicTemplate);
