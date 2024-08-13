import React, { useState } from "react";
import "../Styles/Create.css";

function Create() {
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
    // Handle form submission, e.g., sending data to the server
    console.log("Form data submitted:", formData);
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Time:</label>
        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Hosted By:</label>
        <input
          type="text"
          name="hostedBy"
          value={formData.hostedBy}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Link to Class:</label>
        <input
          type="text"
          name="linkToClass"
          value={formData.linkToClass}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default Create;