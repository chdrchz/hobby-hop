import React, { useState, useEffect } from 'react';
import '../Styles/VerticalCarousel.css'

const VerticalCarousel = () => {
    const words = ["friends", "family", "roommates", "strangers"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="carousel-container">
            <h1>HOP INTO WHAT YOU LOVE</h1>
            <div className="word-container">
                <div className="word">{words[currentWordIndex]}</div>
            </div>
        </div>
    );
};

export default VerticalCarousel;
