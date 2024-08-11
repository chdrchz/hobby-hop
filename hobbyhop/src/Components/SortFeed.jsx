import React from "react";
import "../Styles/SortFeed.css";
import Button from "./Button";
import Button_3 from "./Button_3";

function SortFeed() {
  return (
    <div className="sort-buttons">
      <p>sort by:</p>
      <Button_3 color="#cc9ab5">classes</Button_3>
      <Button_3 color="#cc9ab5">events</Button_3>
      <Button_3 color="#cc9ab5">posts</Button_3>
    </div>
  );
}

export default SortFeed;
