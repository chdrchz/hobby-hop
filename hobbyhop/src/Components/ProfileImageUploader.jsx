// ProfileImageUploader.jsx
import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { storage, db } from "../firebase/firebase-config.js"; 

const ProfileImageUploader = ({ userId }) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    setUploading(true);

    const auth = getAuth();
    const user = auth.currentUser; 

    if (!user) {
      setError(new Error("User not authenticated. Please log in."));
      setUploading(false);
      return;
    }

    const storageRef = ref(storage, `profile_images/${userId}/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error("Error uploading image: ", error);
        setError(error);
        setUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageUrl(url);
          updateUserProfileImage(userId, url);
          setUploading(false);
        });
      }
    );
  };

  const updateUserProfileImage = async (userId, imageUrl) => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, { profileImage: imageUrl });
      console.log("Profile image updated successfully");
    } catch (error) {
      console.error("Error updating profile image: ", error);
      setError(error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={uploading || !image}>
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
      {error && <p>Error: {error.message}</p>}
      {imageUrl && <img src={imageUrl} alt="Profile" style={{ width: "100px", height: "100px" }} />}
    </div>
  );
};

export default ProfileImageUploader;
