import React, { useState } from "react";
import "../Styles/CreateFeedForm.css";

function CreateFeedForm() {

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
    <div className="form-container">
      <form className="create-form">
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
        <div className="form-group">
          <label>Link to Class:</label>
          <input
            type="text"
            name="linkToClass"
            value={formData.linkToClass}
            onChange={handleChange}
          />
        </div>
        <button className="submit-button" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateFeedForm;