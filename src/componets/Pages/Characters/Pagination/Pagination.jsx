import React from 'react';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IconContext } from 'react-icons';

const Container = styled.div`  
  display: flex;
  gap:3rem;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  .iconLeft{
    width: 3rem;
    height: 3rem;
    color: rgb(60, 62, 68);
  }
  .iconRight{
    width: 3rem;
    height: 3rem;
    color: rgb(60, 62, 68);
  }

`;
const PaginationText = styled.button`
  background: rgb(60, 62, 68);
  padding: 1.5rem;
  color: #ddd6d6;
  border-radius: 3rem;
  font-size: 2rem;
  border:none;
`;

const Button = styled.button`
  border: none;

`;

const Pagination = ({next, before, page, setPage}) => {
  const Handlerpagination = ({target}) =>{
    const { value } = target;
    //console.log(value)
    setPage(Number(value))
  }
  return (
    <Container>
      <Button onClick = {before} disabled={page<2}>
        <IconContext.Provider value={{className:"iconLeft"}}>
          <FaAngleLeft/>
        </IconContext.Provider>
      </Button>
      <PaginationText onClick={Handlerpagination} value="1">1</PaginationText>
      <PaginationText onClick={Handlerpagination} value="2">2</PaginationText>
      <PaginationText onClick={Handlerpagination} value="3">3</PaginationText>
      <Button onClick={next} disabled={page>20}>
        <IconContext.Provider value={{className:"iconRight"}}>
          <FaAngleRight/>
        </IconContext.Provider>
      </Button>
    </Container>
  )
}

export default Pagination
