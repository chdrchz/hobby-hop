import React, { useEffect, useState } from "react";
import { db } from '../firebase/firebase-config';
import { getDocs, collection } from 'firebase/firestore';

// This will display dynamic class content from db
function ClassCard() {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        // Set specific collection
        const classesCollectionRef = collection(db, "classes");

        // Fetch data from Firestore
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(classesCollectionRef);
                const classData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                    Title: doc.data().title
                }));
                setClasses(classData);
            } catch (error) {
                console.error("Error fetching documents: ", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            {classes.map((classItem) => (
                <div key={classItem.id}>
                    <h2>{classItem.Title}</h2>
                </div>
            ))}
        </div>
    );
}

export default ClassCard;