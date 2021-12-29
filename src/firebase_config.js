// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd6-GVYsaLHSqSa6gVQtODxutDdcbh8WE",
  authDomain: "blogproject-1520e.firebaseapp.com",
  projectId: "blogproject-1520e",
  storageBucket: "blogproject-1520e.appspot.com",
  messagingSenderId: "237203740340",
  appId: "1:237203740340:web:5acaf50565e987bb6469e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
