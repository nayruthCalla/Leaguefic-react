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
`;
const Text = styled.p`
  font-size: 1.5rem;
  margin-left: 0.5rem;
  padding:1rem;
`;

const Footer = () => {
  return (
    <Container>
        <Text><FaGithub/> nayruthCalla</Text>
        <Text><FaLinkedin/> Nayruth Calla</Text>
        <Text> @ 2021</Text>         
    </Container>
  )
}

export default Footer
