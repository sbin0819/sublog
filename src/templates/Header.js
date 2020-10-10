import React from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';

import styled from 'styled-components';

const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  font-size: 25px;
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
    </>
  );
};

export default Header;
