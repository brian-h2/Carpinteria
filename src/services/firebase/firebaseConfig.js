import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage,ref } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCSEvDdKrYIKCOe56eDVZiYmpWZtzWPZcM",
  authDomain: "carpinteria-d7167.firebaseapp.com",
  projectId: "carpinteria-d7167",
  storageBucket: "carpinteria-d7167.appspot.com",
  messagingSenderId: "597635052368",
  appId: "1:597635052368:web:10e2645ad4b0fb4ca2f255",
  measurementId: "G-S5C1JNL0T5"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };