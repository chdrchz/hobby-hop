import React, { useState, useEffect } from 'react';
import '../Styles/VerticalCarousel.css'

const VerticalCarousel = () => {
    const words = ["with friends", "with family", "with roommates", "with strangers"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="carousel-container">
            <h1><span>HOP</span> INTO WHAT YOU <span>LOVE</span></h1>
            <div className="word-container">
                <div className="word">{words[currentWordIndex]}</div>
            </div>
        </div>
    );
};

export default VerticalCarousel;
