import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCKoKIZKJqTj_OWpjdwc9E3R4TVo5XqVIQ",
  authDomain: "predbltiz.firebaseapp.com",
  databaseURL: "https://predbltiz-default-rtdb.firebaseio.com",
  projectId: "predbltiz",
  storageBucket: "predbltiz.firebasestorage.app",
  messagingSenderId: "343350046344",
  appId: "1:343350046344:web:3c3cffe7fc18f46512393d",
  measurementId: "G-28M5PGWSGW"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
