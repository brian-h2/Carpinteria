import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyATWIy0geANlvGTNOO22EYKHnYwslg7Ido",
  authDomain: "carpinteria-9ca79.firebaseapp.com",
  projectId: "carpinteria-9ca79",
  storageBucket: "carpinteria-9ca79.appspot.com",
  messagingSenderId: "593717564726",
  appId: "1:593717564726:web:2d2c8da7e7b2d3aaa4cf97",
  measurementId: "G-Q4QC8WM8JV"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };