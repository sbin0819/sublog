import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 175px);
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 100vw;
  .title {
    position: absolute;
    top: 100px;
    left: 20px;
    width: 220px;
    background-color: black;
    color: white;
    font-size: 25px;
  }
`;
