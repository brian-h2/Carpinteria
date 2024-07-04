import { collection,getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const imagesData = async () => {
  const imagesCol = collection(db, './images');
  const imageSnapshot = await getDocs(imagesCol);
  return imageSnapshot.docs.map(doc => doc.data());
};