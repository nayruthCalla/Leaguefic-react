import React from 'react';
import styled,{css} from 'styled-components';
import { FaDotCircle } from "react-icons/fa";
import { IconContext } from 'react-icons';

const statusColor = (status) =>{
  if(status === 'Dead'){
    return 'rgb(233, 41, 41)'
  }else if(status === 'unknown'){
    return '#CD7F32'
  }else{
    return 'rgb(85, 204, 68)'
  }
}

const Header = styled('header')(
  ({status}) => css`
  display: flex;
  flex-direction: column;
  margin-left:1rem;
  .icon{
    color: ${statusColor(status)};
    margin-right: 1rem;
  }
`);
const Title = styled.h2`
  color: #FFF;
  font-size:2rem;
  padding: 1rem;
`;
const SecondaryText = styled.p`
  color: #bab4b4;
  font-size:1.6rem;
  padding-left:1rem;
`;

const CardHeader = ({title,status}) => {
  return (
    <Header status = {status}>
      <Title>{title}</Title>      
      <SecondaryText>
        <IconContext.Provider value={{className :"icon"}}>
          <FaDotCircle/>        
        </IconContext.Provider>
          {status}
      </SecondaryText>      
    </Header>
  )
}

export default CardHeader
