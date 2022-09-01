import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
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
