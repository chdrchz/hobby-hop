import './App.css';
import { useEffect } from 'react';
import Header from './Components/Header';
import SideNav from './Components/SideNav';
import UserProfile from './Components/UserProfile';
// import { db } from './firebase/firebase-config';
// import { getDocs, collection } from 'firebase/firestore';

function App() {

  // Set specific collection
  // const classesCollectionRef = collection(db, "classes");

  // Read the db
  // useEffect(() => {
  // const getClasses = async () => {
  // try {
  // const data = await getDocs(classesCollectionRef);
  // const filteredData = data.docs.map((doc) => ({...doc.data(), Title: doc.title}));
  // console.log({filteredData});
  // } catch (error) {
  // console.error(error);
  // }
  // };
  // getClasses();
  // }, []); // To make sure this doesn't run if there is a change in use state????

  return (
    <div className="App">
      <Header />
      <div className="Home">
        <div className="sideNav">
          <SideNav />
        </div>
        <div className="userProfile">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export default App;
