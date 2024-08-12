import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase_config"; // Adjust the path as necessary

const updateUser = async (userId, newFields) => {
  try {
    // Reference to the user's document
    const userRef = doc(db, "users", userId);
    
    // Update the document with new fields
    await updateDoc(userRef, newFields);
    
    console.log("User updated successfully");
  } catch (error) {
    console.error("Error updating user: ", error);
  }
};

export default updateUser;