// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//database
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBYCghGFVUiKReImGHo_O5TaCoyjKvzTT4",
  authDomain: "whereiswaldo-4fefe.firebaseapp.com",
  databaseURL: "https://whereiswaldo-4fefe-default-rtdb.firebaseio.com",
  projectId: "whereiswaldo-4fefe",
  storageBucket: "whereiswaldo-4fefe.appspot.com",
  messagingSenderId: "179437096580",
  appId: "1:179437096580:web:478aed5c55cba9b5793cd1",
  measurementId: "G-QP9RVVZ616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);