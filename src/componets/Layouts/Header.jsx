import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background: #000;
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
  @media screen and (min-width: 762px) {
    flex-direction: row;
    padding: 1rem;          
    }
    @media screen and (min-width: 1024px) {
    }
`;
const HeaderTitle = styled.h1`
  color: #E71D36;
  font-family: 'Ubuntu', sans-serif;
  margin:0;
  font-size: 3rem;
  padding: 1rem;
`;
const NavHeader = styled.nav`
  width: 100%; 
  @media screen and (min-width: 762px) {  
  display: flex;
  justify-content: end;
  }
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
@media screen and (min-width: 762px) {  
    flex-direction: row;
  }
  
`;
const Li = styled(Link)`
  color: #dad5d5;
  font-size: 1.5rem;
  font-family: 'Ubuntu', sans-serif;
  list-style: none;
  text-decoration: none;
  border-top: 1px solid rgba(255, 255, 255, 0.466);
  padding: 1rem;
  font-weight: bold;
  text-align: center;
  &:hover{
    background: #3c3e448d;
    border-radius:1rem;
  } 
  @media screen and (min-width: 762px) {  
  border: none;  
  font-size: 2.5rem;
  }
`;
const Linkto = styled(Link)`
  text-decoration: none;
  @media screen and (min-width: 762px) {
    min-width: 50%;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Linkto to = "/">
        <HeaderTitle>Rick and Morty</HeaderTitle>
      </Linkto>
      <NavHeader>
        <Ul>
          <Li to = "/">Home</Li>
          <Li to = "/characters">Characters</Li>
          <Li to = "/characters">Statistics</Li>
        </Ul>
      </NavHeader>
    </HeaderContainer>
  )
}


export default Header

