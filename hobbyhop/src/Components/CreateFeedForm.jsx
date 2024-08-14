import React, { useState } from "react";
import "../Styles/CreateFeedForm.css";
import Button from "./Button";

function CreateFeedForm({ type }) {
  const [formData, setFormData] = useState({
    image: "",
    description: "",
    time: "",
    date: "",
    location: "",
    hostedBy: "",
    linkToClass: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  const handleExit = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div className="form-container">
      <form className="create-form" onSubmit={handleSubmit}>
      <div className="exit-create-account">
                <h1>Share a hobby!</h1>
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
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        {type === "event" && (
          <>
            <div className="form-group">
              <label>Time:</label>
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Location:</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Hosted By:</label>
              <input
                type="text"
                name="hostedBy"
                value={formData.hostedBy}
                onChange={handleChange}
              />
            </div>
          </>
        )}
        <Button color="#b8cc76" className="submit-button" type="submit">
          Create
        </Button>
      </form>
    </div>
  );
}

export default CreateFeedForm;