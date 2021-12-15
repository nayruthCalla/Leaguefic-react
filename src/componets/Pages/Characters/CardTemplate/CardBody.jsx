import React from 'react';
import styled,{css} from 'styled-components';
import { FaGalacticSenate, FaJediOrder, FaMandalorian } from "react-icons/fa";
import { IconContext } from 'react-icons';

const Container = styled('div')(
  ()=> css`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  .iconG{
    color: #dfcd2c;
    margin-right: 1rem;
  }
  .iconS{
    color: #1fedd8;
    margin-right: 1rem;
  }
  .iconL{
    color: #d831d5;
    margin-right: 1rem;
  }
  
`);
const TextCont = styled.div`
  margin: 1rem 0 0 5rem;
  display:flex;
  align-items: center;
  @media screen and (min-width: 762px) {
      margin-left: 1rem;
    }
    @media screen and (min-width: 1024px) {
      max-width: 25rem;
    }
`;
const Text = styled.h2`
  color: #e6dddd;
  font-size:1.8rem;
  padding: 1rem;
`;
const SecondaryText = styled.p`
  color: #bab4b4;
  font-size:1.6rem;
  padding-left:1rem;
`;


const CardBody = ({gender,species,location}) => {
  return (
    <Container>
      <TextCont>
        <Text>
          <IconContext.Provider value={{className: "iconG"}}>
            <FaMandalorian/>
          </IconContext.Provider>
          Gender :
        </Text>
        <SecondaryText>{gender}</SecondaryText>
      </TextCont>
      <TextCont>
          <Text>
          <IconContext.Provider value={{className: "iconS"}}>
            <FaJediOrder/>
          </IconContext.Provider>
          Species:
        </Text>
        <SecondaryText>{species}</SecondaryText>
      </TextCont>
      <TextCont>
        <Text>
          <IconContext.Provider value={{className: "iconL"}}>
            <FaGalacticSenate/>
          </IconContext.Provider>
          Location:
        </Text>
        <SecondaryText>{location}</SecondaryText>
      </TextCont>
    </Container>
  )
}

export default CardBody
