import React from 'react';
import Header from '../Components/Header';
import SideNav from '../Components/SideNav';
import CustomFeed from '../Components/CustomFeed';
import '../Styles/Feed.css';
const Feed = () => {
  return (
    <div className='feed'>
      <Header />
      <div className='feed-container'>
        <SideNav />
        <div className='all-posts'>
          <div className='sort-posts'>
            <h1>Hop Into Something New</h1>
          </div>
          <CustomFeed />
        </div>
      </div>
    </div>
  );
};

export default Feed;