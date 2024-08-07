import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import '../Styles/Landing.css';

const Landing = () => {

  return (
    <div> 
      <Header />
      <Hero />
    </div>
  );
};

export default Landing;