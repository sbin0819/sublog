import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';

import HamburgerMenu from './HamburgerMenu';

import styled from 'styled-components';

const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  font-size: 25px;
`;

const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {visible && <HamburgerMenu visible={visible} setVisible={setVisible} />}
      <TopMenu>
        <MenuOutlined onClick={() => setVisible(!visible)} />
        <Link to='/'>
          <h1 className='logo'>sublog</h1>
        </Link>
        <SearchOutlined />
      </TopMenu>
    </>
  );
};

export default Header;
