import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const registerUser = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error during registration:", error.message);
  }
};


export const signInUser = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error during sign-in:", error.message);
  }
};