import React, { useState } from 'react';
import Header from '../Components/Header';
import CustomFeed from '../Components/CustomFeed';
import UserProfile from '../Components/UserProfile';
import SideNav from '../Components/SideNav';
import '../Styles/Feed.css';

const Feed = () => {
  const [isUserProfileVisible, setIsUserProfileVisible] = useState(false);

  const toggleUserProfile = () => {
    setIsUserProfileVisible(prevState => !prevState);
  };

  return (
    <div className='feed'>
      <Header onUserProfileToggle={toggleUserProfile} />
      <SideNav />
      <div className='feed-container'>
        {isUserProfileVisible ? (
          <UserProfile className="user-profile" />
        ) : (
          <div>
            <div className='sort-posts'>
              <h1>Hop Into Something New</h1>
            </div>
            <CustomFeed />
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;