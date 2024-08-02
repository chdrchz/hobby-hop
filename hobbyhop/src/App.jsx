import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase/firebase-config';
import { getDocs, collection } from 'firebase/firestore';

function App() {
  const [classes, setClasses] = useState([]);

  // Set specific collection
  const classesCollectionRef = collection(db, "classes");

  // Read the db
  useEffect(() => {
    const getClasses = async () => {
    try {
      const data = await getDocs(classesCollectionRef);
      const filteredData = data.docs.map((doc) => ({...doc.data(), Title: doc.title}));
      console.log({filteredData});
     } catch (error) {
      console.error(error);
     }
  };
  getClasses();
  }, []); // To make sure this doesn't run if there is a change in use state????

  return (
    <div className="App">
    </div>
  );
}

export default App;
