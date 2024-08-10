import React, { useState } from 'react';
import Header from '../Components/Header';
import SideNav from '../Components/SideNav';
import CustomFeed from '../Components/CustomFeed';
import UserProfile from '../Components/UserProfile';
import '../Styles/Feed.css';

const Feed = () => {
  const [isUserProfileVisible, setIsUserProfileVisible] = useState(false);

  const toggleUserProfile = () => {
    setIsUserProfileVisible(prevState => !prevState);
  };

  return (
    <div className='feed'>
      <Header onUserProfileToggle={toggleUserProfile} />
      <div className='feed-container'>
        <div className='without-sidenav'>
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
    </div>
  );
};

export default Feed;