import React from 'react';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IconContext } from 'react-icons';

const Container = styled.div`  
  display: flex;
  gap:2rem;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

`;
const PaginationText = styled.h3`
  background: rgb(60, 62, 68);
  padding: 1rem;
  color: #ddd6d6;
  border-radius: 3rem;
  font-size: 2rem;
`;


const Pagination = () => {
  return (
    <Container>
      <IconContext.Provider value={{className:"iconLeft"}}>
        <FaAngleLeft/>
      </IconContext.Provider>
      <PaginationText>1</PaginationText>
      <PaginationText>2</PaginationText>
      <PaginationText>3</PaginationText>
      <IconContext.Provider value={{className:"iconRight"}}>
        <FaAngleRight/>
      </IconContext.Provider>
    </Container>
  )
}

export default Pagination
