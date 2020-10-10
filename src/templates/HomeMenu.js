import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import styled from 'styled-components';

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

const HomeMenu = () => {
  return (
    <>
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
    </>
  );
};

export default HomeMenu;
