import React from "react";
import "../Styles/SortFeed.css";

function SortFeed() {
  return (
    <div className="sort-buttons">
      <p>sort by:</p>
      <a href="#">classes</a>
      <a href="#">events</a>
      <a href="#">posts</a>
    </div>
  );
}

export default SortFeed;
