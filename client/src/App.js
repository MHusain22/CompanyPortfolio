import React from 'react'
import './App.css';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <Home />
      <Cards />
      <About />
      <Services />
      <Contact />
      <Footer />
      </>
  )
}

export default App