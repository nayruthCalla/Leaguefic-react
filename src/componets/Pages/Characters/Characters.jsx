import React,{useState, useEffect} from 'react';
import CardTemplate from './CardTemplate/CardTemplate';
import styled from 'styled-components';
import axios from 'axios';
import Pagination from './Pagination/Pagination';

const uri = "https://rickandmortyapi.com/api/character"
const Title = styled.h2`
  padding: 2rem;
  font-size: 2.5rem;
  font-family: 'Ubuntu', sans-serif;
  color: #807b7b
`;


const Characters = () => {

  const [card,setCard] = useState([]);

  useEffect( ()=>{
    
    const getData = async()=> {
      try {
        const response = await axios.get(uri);
        const data = response.data.results;
        console.log(response.data.results);
        setCard(data)
      }catch(e){
        console.log(e)
      }
    }
    getData()
},[]);  

  return (
    <div> 
      <Title>Meet the characters:</Title>
      {card.map(({image,name,status,gender,species,location},i)=>        
        <CardTemplate 
        key = {i}
        urlImage = {image}
        title = {name}
        status = {status}
        gender = {gender}
        species = {species}
        location = {location.name}/>)}
      <Pagination/>   
    </div>
  )
}
export default Characters
