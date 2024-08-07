import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import CreateAccount from '../Components/CreateAccount';
import '../Styles/Landing.css';

const Landing = () => {
  return (
    <div> 
      <Header />
      <Hero />
      <CreateAccount />
    </div>
  );
};

export default Landing;