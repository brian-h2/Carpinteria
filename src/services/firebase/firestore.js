import { collection,getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const imagesData = async () => {
  try {
    console.log("Fetching documents...");
    const imagesCol = collection(db, 'images/');
    const imageSnapshot = await getDocs(imagesCol);
    console.log("Documents fetched: ", imageSnapshot.docs.length);
    return imageSnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error("Error fetching documents: ", error);
    throw new Error("Error fetching documents");
  }
};