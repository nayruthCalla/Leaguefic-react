import React from 'react';
import styled from 'styled-components';
import fondo from '../../../assets/fondo.jpg'

const Container = styled.div`
  width: 100%;
  background: rgb(8,7,7);
  background: linear-gradient(90deg, rgba(8,7,7,0.8295693277310925) 22%, rgba(3,3,3,0.8519782913165266) 46%, #0807071a 80%), url(${fondo});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WelcomeText = styled.div`
  display :flex ;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  padding: 0 2rem 0 2rem;
`;
const MainButton = styled.button`
  background-color: #E71D36;
  box-shadow: 0 6px rgb(231 29 53 / 66%);
  border-radius: 2rem;
  font-weight: bold;
  color: #fff;
  padding: 1.3rem;
  border: none;
  font-size: 2rem;
  white-space: nowrap;
  margin: 4rem;  
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1rem 2rem 0 2rem;
  text-align: left;
`;
const Text = styled.h2`
  font-family: 'Ubuntu', sans-serif;
  font-size: 2.4rem;
  color: #fff;
`;
const SecondaryText = styled.p`
  padding-top: 1.6rem;
  color: #fff;;
`;


const Main = ({urlLogo}) => {
  return (
    <Container>
      <WelcomeText>
        <Image src ={urlLogo}/>
        <TextContainer>          
          <Text>Rick and Morty</Text>
          <SecondaryText>
            Rick is a brilliant and somewhat drunk scientist who kidnaps his irritable teenage grandson Morty for adventures in other worlds and alternate dimensions.
          </SecondaryText>
        </TextContainer>        
        <MainButton>
          GO TO CHARACTERS
        </MainButton>       
      </WelcomeText>
    </Container>
  )
}


export default Main
