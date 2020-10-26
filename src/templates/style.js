import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 100;
`;

export const ModalInner = styled.div`
  .modal-header {
    display: flex;
    justify-content: flex-end;
    margin-right: 40px;
    font-size: 40px;
    color: white;
    div {
      cursor: pointer;
    }
  }
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15%;
    a {
      display: inline-flex;
      text-transform: uppercase;
      justify-content: center;
      align-items: center;
      color: inherit;
      margin: 20px 20px;
      width: 45vw;
      padding: 4px 16px;
      min-width: 200px;
      height: 50px;
      font-size: 35px;
      color: #c49969;
      :hover {
        border: 1px solid #c49969;
        cursor: pointer;
      }
    }
  }
`;
