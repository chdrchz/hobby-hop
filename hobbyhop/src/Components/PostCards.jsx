import React from "react";
import "../Styles/PostCards.css";
function PostCards({ image, description, location, date, linkToClass }) {
  return (
    <div className="post-card">
      {image && <img src={image} alt="Post" className="post-card-image" />}
      {description && <p className="hobby-card-description">{description}</p>}
      <div className="post-card-details">
        {date && (
          <p>
            <strong>Date:</strong> {date}
          </p>
        )}
        {location && (
          <p>
            <strong>Location:</strong> {location}
          </p>
        )}
        {linkToClass && (
          <p>
            <strong>Link:</strong> {linkToClass}
          </p>
        )}
      </div>
    </div>
  );
}

export default PostCards;
