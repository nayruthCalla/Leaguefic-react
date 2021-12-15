import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Container = styled.footer`
  background:#181818;
  width: 100%;
  color: #726e6e;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-rrss{
    height: 2rem;
    width: 2rem;
    margin-left: 1rem;    
  }
  @media screen and (min-width: 762px) {
    flex-direction: row;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    }
`;
const Text = styled.a`
  font-size: 1.5rem;
  margin-left: 0.5rem;
  padding:1rem;
  text-decoration: none;
  color: #726e6e;
`;

const Footer = () => {
  return (
    <Container>
        <Text  href="https://www.linkedin.com/in/nayruth-calla/" target= "_blanck" ><FaGithub/> nayruthCalla</Text>
        <Text href="https://github.com/nayruthCalla" target= "_blanck"><FaLinkedin/> Nayruth Calla</Text>
        <Text> @ 2021</Text>         
    </Container>
  )
}

export default Footer
