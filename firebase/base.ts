import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkLzUx6d7DkAfBqXSi2ajNMd4cc6EEy_0",
  authDomain: "credit-you.firebaseapp.com",
  projectId: "credit-you",
  storageBucket: "credit-you.appspot.com",
  messagingSenderId: "679866019810",
  appId: "1:679866019810:web:e40daefa1734ccbcc0d3bb",
  measurementId: "G-TV1H8TNSH6"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
