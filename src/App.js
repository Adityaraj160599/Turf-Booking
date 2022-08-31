import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Banner from './components/banner';
import Footer from './components/footer';
import GamingLibrary from './components/gamingLibrary';
import Header from './components/header';
import MostPopular from './components/mostPopular';
import Router from './components/routes/routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
