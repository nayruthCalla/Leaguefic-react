import '../css/App.css';
import Header from './Layouts/Header';
//import Landing from './Pages/Landing/Landing';
import Footer from './Layouts/Footer';
import Characters from './Pages/Characters/Characters'

const App = () => {
  return (
    <>
      <Header/>   
      <Characters/>
      <Footer/>
    </>
  );
}

export default App;
