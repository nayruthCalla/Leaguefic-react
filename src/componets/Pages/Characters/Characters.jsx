import React,{useState, useEffect} from 'react';
import CardTemplate from './CardTemplate/CardTemplate';
import styled from 'styled-components';
import axios from 'axios';
import Pagination from './Pagination/Pagination';
import logo from '../../../assets/logo.png';
import Loading from '../../Layouts/Loading/Loading';

const uri = "https://rickandmortyapi.com/api/character";

const Title = styled.h2`
  padding: 2rem;
  font-size: 2.5rem;
  font-family: 'Ubuntu', sans-serif;
  color: #807b7b
`;

const Container = styled.div`
@media screen and (min-width: 762px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items :center ;
  flex:1;
  }
@media screen and (min-width: 1024px) {
  grid-template-columns: repeat(3,1fr);
}
`;
const CardsContainer = styled.div`
  @media screen and (min-width: 762px) {
      margin: 0 5rem 0 5rem;      
      display: grid;      
      gap: 2rem;
      grid-template-columns: repeat(2,1fr);
      justify-content: center;      
    }
    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(3,1fr);
    }
`;
const Image = styled.img`   
max-width: 100%;
  height: auto;
  padding: 0 2rem 0 2rem;
@media screen and (min-width: 762px) {    
  max-width: 50%;
  height: auto;
  padding: 0 2rem 0 2rem;
  }
`;
const Characters = () => {

  const [card,setCard] = useState([]);
  const [numPage, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [Cardloading, setCardloading] = useState(false);

  useEffect( ()=>{
    
    const getData = async()=> {
      try {
        console.log(`${uri}/?page${numPage}`)
        const response = await axios.get(`${uri}/?page=${numPage}`);
        const data = response.data.results;
        //console.log(response.data.results);
        setCard(data);
        setLoading(true);
        setCardloading(true)
      }catch(e){
        console.log(e)
      }
    }
    getData()
},[numPage]);  

const pageNext = () =>{
  setPage(numPage + 1);
  //console.log(numPage)
}
const pageBefore = () =>{
  setPage(numPage - 1);
  //console.log(numPage)
}
  return (
    <Container>
    <Image src ={logo}/>
      <Title>Meet the characters:</Title>
        {!loading
          ?<Loading/>
          : <CardsContainer>
             {card.map(({image,name,status,gender,species,location},index)=>
              !Cardloading
                ?<Loading key = {index}/>
                :<CardTemplate 
                  key = {index}
                  urlImage = {image}
                  title = {name}
                  status = {status}
                  gender = {gender}
                  species = {species}
                  location = {location.name}/>)}
          </CardsContainer>
        }
      <Pagination next = {pageNext} before ={pageBefore} page ={numPage} setPage = {setPage}/>
      
    </Container>
  )
}
export default Characters
