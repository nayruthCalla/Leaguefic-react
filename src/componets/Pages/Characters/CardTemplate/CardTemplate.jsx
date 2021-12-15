import React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import DividingLine from '../../../Layouts/LineStyle/DividingLine';


const Container = styled.article`
  display: flex;
  flex-direction: column;  
  background: rgb(60, 62, 68);
  margin: 1rem 0 2rem 0;
  padding-bottom: 1.5rem;
`;
const Image = styled.img`
  padding:3rem;
  border-radius: 4rem;
`;


const CardTemplate = ({urlImage,title,status, gender, species, location}) => {

  return (
    <Container>      
      <Image src={urlImage}/> 
      <DividingLine/>
      <CardHeader title={title} status={status}/>
      <DividingLine/>
      <CardBody gender = {gender} species = {species} location={location} />
    </Container>
  )
}

// CardTemplate.propTypes = {

// }

export default CardTemplate
