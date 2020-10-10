import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
`;
const StyledMenu = styled(Menu)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  background: black;
  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <StyledMenu>
        <Menu.Item>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/recommend'>For you</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/topics'>Topics</Link>
        </Menu.Item>
        <Menu.Item key='listen'>
          <Link to='/saved'>Saved</Link>
        </Menu.Item>
      </StyledMenu>
    </Container>
  );
};

export default Footer;
