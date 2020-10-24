import styled from 'styled-components';

// add media query
export const ReadItemContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContentContainer = styled.div`
  position: relative;
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
