import React from 'react';
import styled from 'styled-components';
import CategoryItem from './categoryItem';
import { categories } from './dummy';

const Container = styled.div`
  flex: flex;
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
