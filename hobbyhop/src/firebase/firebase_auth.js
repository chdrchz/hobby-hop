import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from "firebase/auth";

// Register a new user with email and password
export const registerUser = async (email, password) => {
  const auth = getAuth();
  try {
    // Set session persistence to local storage
    await setPersistence(auth, browserLocalPersistence);
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Return the newly created user
  } catch (error) {
    console.error("Error during registration:", error.message);
    throw error; // Propagate the error to the caller
  }
};

// Sign in an existing user with email and password
export const signInUser = async (email, password) => {
  const auth = getAuth();
  try {
    // Set session persistence to local storage
    await setPersistence(auth, browserLocalPersistence);
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Return the signed-in user
  } catch (error) {
    console.error("Error during sign-in:", error.message);
    throw error; // Propagate the error to the caller
  }
};