import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import '../Styles/Landing.css';
import VerticalCarousel from '../Components/VerticalCarousel';

const Landing = () => {

  return (
    <div> 
      <Header />
      <Hero />
      <Footer />
      <VerticalCarousel />
    </div>
  );
};

export default Landing;