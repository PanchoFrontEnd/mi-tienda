// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVFgwf8HrHKyV781nTavp8KFNIDrGi0Ok",
  authDomain: "ludifood-d7f66.firebaseapp.com",
  projectId: "ludifood-d7f66",
  storageBucket: "ludifood-d7f66.appspot.com",
  messagingSenderId: "1085556743360",
  appId: "1:1085556743360:web:2da2f9c584dd2621316125"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);