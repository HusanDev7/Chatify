import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatify-a63e5.firebaseapp.com",
  projectId: "chatify-a63e5",
  storageBucket: "chatify-a63e5.appspot.com",
  messagingSenderId: "216229210833",
  appId: "1:216229210833:web:52124f62bd3f64871773f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);