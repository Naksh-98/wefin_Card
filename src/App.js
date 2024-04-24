import './App.css';
import React from 'react';
import MainCard from './Components/MainCard'
import NavMenu from './Components/NavMenu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <NavMenu/>
    <MainCard/>
    <Footer/>
    </>
    
  );
}

export default App;

