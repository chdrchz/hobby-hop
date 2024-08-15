import React, { useState } from "react";
import CreateFeedForm from "./CreateFeedForm";
import Button from "../Components/Button";
import "../Styles/CreateFeed.css";

function CreateFeed() {
  const [type, setType] = useState(null);

  const handleTypeChange = (selectedType) => {
    setType(selectedType);
  };

  const handleExit = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div className="create-feed-container">
      {type === null ? (
        <div className="form-container">
          <div className="pre-form-content">
            <div className="pre-form-header">
              <h2>What will you create?</h2>
              <div className="exit-create-account">
                <svg
                  onClick={handleExit}
                  width="20"
                  height="20"
                  viewBox="0 0 82 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_119_21)">
                    <path
                      d="M54.8725 40.7425L78.5325 17.0825C82.4425 13.1725 82.4425 6.8425 78.5325 2.9425C74.6225 -0.9575 68.2925 -0.9575 64.3925 2.9425L40.7325 26.6025L17.0725 2.9325C13.1625 -0.9775 6.8325 -0.9775 2.9325 2.9325C-0.9675 6.8425 -0.9675 13.1725 2.9325 17.0725L26.5925 40.7325L2.9325 64.3925C-0.9775 68.3025 -0.9775 74.6325 2.9325 78.5325C6.8425 82.4325 13.1725 82.4325 17.0725 78.5325L40.7325 54.8725L64.3925 78.5325C68.3025 82.4425 74.6325 82.4425 78.5325 78.5325C82.4325 74.6225 82.4325 68.2925 78.5325 64.3925L54.8725 40.7325V40.7425Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_119_21">
                      <rect width="81.465" height="81.465" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            {/* Conditionally render the button group */}
            {type === null && (
              <div className="button-group">
                <Button
                  onClick={() => handleTypeChange("post")}
                  color="#b8cc76"
                  className="select-button"
                >
                  post
                </Button>
                <Button
                  onClick={() => handleTypeChange("event")}
                  color="#b8cc76"
                  className="select-button"
                >
                  class | event
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <CreateFeedForm type={type} />
        </div>
      )}
    </div>
  );
}

export default CreateFeed;
