import React from "react";
import { db } from '../firebase/firebase-config';
import { getDocs, collection } from 'firebase/firestore';

// This will display dynamic class content from db
function ClassCard() {

    // Set specific collection
    const classesCollectionRef = collection(db, "classes");

    // Read the db. getDocs gets all "tables"
    const data = getDocs(classesCollectionRef);

    // Iterate over the data
    data.docs().map();
}

export default ClassCard;