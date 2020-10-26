import React from 'react';
import { Link } from 'react-router-dom';

import { ModalWrapper, ModalInner } from './style';

export default ({ visible, setVisible }) => {
  const onClick = () => {
    setVisible(!visible);
  };
  return (
    <ModalWrapper>
      <ModalInner>
        <div className='modal-header'>
          <div onClick={onClick}>X</div>
        </div>
        <div className='menu'>
          <div onClick={onClick}>
            <Link to='/'>HOME</Link>
          </div>
          <div onClick={onClick}>
            <Link to='/news'>NEWS</Link>
          </div>
          <div onClick={onClick}>
            <Link to='/about'>ABOUT</Link>
          </div>
          <div onClick={onClick}>
            <Link to='/account'>LOGIN</Link>
          </div>
        </div>
      </ModalInner>
    </ModalWrapper>
  );
};
