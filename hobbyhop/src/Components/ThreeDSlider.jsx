// ThreeDSlider.jsx
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import ProfileCard from './ProfileCard';
import { getHobbies } from '../firebase/getHobbies';
import '../Styles/ThreeDSlider.css';

const ThreeDSlider = () => {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    const fetchHobbies = async () => {
      const hobbiesData = await getHobbies();
      setHobbies(hobbiesData);
    };

    fetchHobbies();
  }, []);

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
        {hobbies.map(hobby => (
          <ProfileCard
            key={hobby.id}
            image="https://via.placeholder.com/150" // Update if you have actual images
            name={hobby.name}
            bio={hobby.description || "No description available"}
            hobby={hobby.name}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ThreeDSlider;
