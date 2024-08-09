import React from 'react';
import Slider from "react-slick";
import ProfileCard from './ProfileCards';
import '../Styles/ThreeDSlider.css';

const ThreeDSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 768 ? 3 : 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <ProfileCard
          image="https://via.placeholder.com/150"
          name="John Doe"
          bio="Web developer and coffee enthusiast. Loves coding and exploring new technologies."
          hobby="Photography"
        />
        <ProfileCard
          image="https://via.placeholder.com/150"
          name="Jane Smith"
          bio="Graphic designer with a passion for creative arts. Enjoys painting and digital design."
          hobby="Drawing"
        />
        <ProfileCard
          image="https://via.placeholder.com/150"
          name="Alice Johnson"
          bio="Digital marketer who loves to travel and discover new cultures. Always learning."
          hobby="Traveling"
        />
        <ProfileCard
          image="https://via.placeholder.com/150"
          name="Michael Brown"
          bio="Fitness coach with a love for healthy living. Dedicated to helping others achieve their goals."
          hobby="Fitness"
        />
      </Slider>
    </div>
  );
};

export default ThreeDSlider;
