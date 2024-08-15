import React, { useState, useContext } from "react";
import Button from "./Button";
import { UserContext } from "../Contexts/UserContext";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import "../Styles/ProfileForm.css";

function ProfileForm({ existingProfileData, handleClose }) {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    fullName: existingProfileData.fullName || "",
    bio: existingProfileData.bio || "",
    occupation: existingProfileData.occupation || "",
    interests: existingProfileData.interests.join(", ") || "",
  });

  const db = getFirestore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user && user.uid) {
      const userRef = doc(db, "users", user.uid);

      try {
        await updateDoc(userRef, {
          fullName: formData.fullName,
          bio: formData.bio,
          occupation: formData.occupation,
          interests: formData.interests
            .split(",")
            .map((interest) => interest.trim()),
        });
        alert("Profile updated successfully!");
        handleClose(); // Close the form after successful update
      } catch (error) {
        console.error("Error updating profile: ", error);
        alert("An error occurred while updating your profile.");
      }
    }
  };

  return (
    <div className="profile-form-container">
      <form onSubmit={handleSubmit} className="profile-form">
        <h3>Edit Profile</h3>

        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="occupation">Occupation</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            rows="4"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="interests">Interests(comma-separated)</label>
          <input
            type="text"
            id="interests"
            name="interests"
            value={formData.interests}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-buttons">
          <Button color="#b8cc76" type="submit">Save</Button>
          <Button color="#b8cc76" type="button" onClick={handleClose}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
