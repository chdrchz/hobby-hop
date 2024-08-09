import React from 'react';
import '../Styles/HobbyCards.css';

function HobbyCards({ image, description, time, date, location, hostedBy }) {
  return (
    <div className="hobby-card">
      {image && <img src={image} alt="Event" className="hobby-card-image" />}
      {description && <p className="hobby-card-description">{description}</p>}
      <div className="hobby-card-details">
        {time && <p><strong>Time:</strong> {time}</p>}
        {date && <p><strong>Date:</strong> {date}</p>}
        {location && <p><strong>Location:</strong> {location}</p>}
        {hostedBy && <p><strong>Hosted by:</strong> {hostedBy}</p>}
      </div>
    </div>
  );
}

export default HobbyCards;