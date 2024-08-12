import React from "react";
import Header from "../Components/Header";
import CustomFeed from "../Components/CustomFeed";
import SideNav from "../Components/SideNav";
import SortFeed from "../Components/SortFeed";
import "../Styles/Feed.css";

const Feed = () => {
  return (
    <div className="feed-1">
      <SideNav />
      <div className="feed-container-1">
        <div className="feed-header-1">
          <h1>
            BURROW INTO <span className="span-feed">YOUR</span> COMMUNITY
          </h1>
        </div>
        <div>
          <SortFeed />
        </div>
        <CustomFeed />
      </div>
    </div>
  );
};

export default Feed;
