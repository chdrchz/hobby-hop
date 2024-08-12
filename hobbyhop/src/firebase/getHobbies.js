import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

export const getHobbies = async () => {
  const hobbiesRef = collection(db, "hobbies");
  const hobbySnapshot = await getDocs(hobbiesRef);
  const hobbyList = hobbySnapshot.docs.map(doc => doc.data());
  return hobbyList;
};