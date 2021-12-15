import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background: #000;
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
`;
const HeaderTitle = styled.h1`
  color: #E71D36;;
  font-family: 'Ubuntu', sans-serif;
  margin:0;
  font-size: 3rem;
  padding: 1rem;
`;
const NavHeader = styled.nav`
  width: 100%;  
`;
const Ul = styled.ul`
  
`;
const Li = styled.li`
  color: #dad5d5;
  font-size: 1.5rem;
  font-family: 'Ubuntu', sans-serif;
  list-style: none;
  border-top: 1px solid rgba(255, 255, 255, 0.466);
  padding: 1rem;
  font-weight: bold;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>The Rick and Morty</HeaderTitle>
      <NavHeader>
        <Ul>
          <Li>Home</Li>
          <Li>Characters</Li>
          <Li>Statistics</Li>
        </Ul>
      </NavHeader>
    </HeaderContainer>
  )
}


export default Header

