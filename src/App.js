import './App.css';
import Banner from './components/banner';
import Footer from './components/footer';
import GamingLibrary from './components/gamingLibrary';
import Header from './components/header';
import MostPopular from './components/mostPopular';

function App() {
  return (
   <>
   <Header/>
   <Banner/>
   <MostPopular/>
   <GamingLibrary/>
   <Footer/>
   </>
  );
}

export default App;
