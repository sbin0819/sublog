import React from 'react';
import styled from 'styled-components';
import CategoryItem from './categoryItem';
import { categories } from './dummy';

const Container = styled.div`
  flex: flex;
  margin: 20px 15px;
`;

function Header() {
  return (
    <Container>
      {categories.map((name, i) => (
        <CategoryItem key={i} name={name} />
      ))}
    </Container>
  );
}

export default Header;
