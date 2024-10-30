import React from 'react';
import '../Styles/ProfileCard.css';

const ProfileCard = ({ image, name, bio, hobby }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name}'s profile`} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-bio">{bio}</p>
      <button className="hobby-button">{hobby}</button>
    </div>
  );
};

export default ProfileCard;
