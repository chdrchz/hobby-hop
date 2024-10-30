import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../Contexts/UserContext";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Button from "./Button";
import ProfileForm from "./ProfileForm";
import "../Styles/UserProfile.css";

function Profile() {
  const { user } = useContext(UserContext);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [profileData, setProfileData] = useState({
    fullName: "",
    pronouns: "",
    bio: "",
    occupation: "",
    interests: [],
  });
  const [isEditing, setIsEditing] = useState(false);

  const db = getFirestore();

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user && user.uid) {
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            const userData = userSnap.data();
            setProfileData({
              fullName: userData.fullName || "User Name",
              bio: userData.bio || "No bio provided.",
              occupation: userData.occupation || "Occupation",
              interests: userData.interests || [],
            });
            setProfileImageUrl(userData.profileImageUrl || "");
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user profile: ", error);
        }
      }
    };

    fetchUserProfile();
  }, [user, db]);

  const handleProfileImageUpload = (imageUrl) => {
    setProfileImageUrl(imageUrl);
  };

  return (
    <div className="user-container">
      {isEditing ? (
        <ProfileForm
          existingProfileData={profileData}
          handleClose={() => setIsEditing(false)}
        />
      ) : (
        <div className="inner-container">
          <div className="profile-image">
            <div>
              <p>img here</p>
            </div>
            <div className="edit-profile-button">
              <Button color="#b8cc76" onClick={() => setIsEditing(true)}>Edit Profile</Button>
            </div>
          </div>
          <div className="name-and-pronouns">
            <h3 className="profile-heading">{profileData.fullName}</h3>
            <p className="profile-heading">{profileData.occupation}</p>
          </div>
          <div className="profile-description">
            <div className="description">
              <h4 className="profile-heading">About Me</h4>
              <p className="description-paragraph">{profileData.bio}</p>
            </div>
          </div>
          <div className="interests">
            <div className="interest-add">
              <h4 className="interest-heading profile-heading">What I Like</h4>
            </div>
            <ul className="interest-list">
              {profileData.interests.length > 0 ? (
                profileData.interests.map((interest, index) => (
                  <li key={index} className="interest-tag">
                    <p>{interest}</p>
                  </li>
                ))
              ) : (
                <li>No interests listed.</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
