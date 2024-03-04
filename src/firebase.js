// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTQqX2Go6DF7gZ61EpfDhjhYdmtM9EN6M",
  authDomain: "todo-app-yt-81d77.firebaseapp.com",
  projectId: "todo-app-yt-81d77",
  storageBucket: "todo-app-yt-81d77.appspot.com",
  messagingSenderId: "306238355210",
  appId: "1:306238355210:web:d8c880b49383f48a0d6cf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);