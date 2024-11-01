import React, { createContext, useState, useContext } from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import '../Styles/Landing.css';

const Landing = () => {

  return (
    <div className='landing'>
      <div className='hero-container'>
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;