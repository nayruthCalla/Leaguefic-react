import '../css/App.css';
import Header from './Layouts/Header';
import Landing from './Pages/Landing/Landing';
import Footer from './Layouts/Footer';
import Characters from './Pages/Characters/Characters';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <Header/>    
    <Routes>      
      <Route path="/" element ={<Landing/>}/>
      <Route path="/characters" element ={<Characters/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
