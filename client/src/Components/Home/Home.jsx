import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Hero from "./Hero/Hero";


const Home = () => {
  return (
    <div className="HomeMain">
      <Navbar />
      <Hero />
      
    </div>
  );
};

export default Home;
