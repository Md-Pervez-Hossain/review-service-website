// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlzlPC-vPc8uS3JzVfPyGmV4wvAlFCWnY",
  authDomain: "food-service-review.firebaseapp.com",
  projectId: "food-service-review",
  storageBucket: "food-service-review.appspot.com",
  messagingSenderId: "822055377418",
  appId: "1:822055377418:web:a0fde8cd469d6549531df3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
