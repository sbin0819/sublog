import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';

import styled from 'styled-components';

const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  font-size: 25px;
`;

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

const Header = () => {
  return (
    <>
      <TopMenu>
        <MenuOutlined />
        <Link to='/'>
          <h1 className='logo'>sublog</h1>
        </Link>
        <SearchOutlined />
      </TopMenu>
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

export default Header;
