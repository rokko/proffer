// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Usa Realtime Database: "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDGRFOBh_sXOWorj0Q92MezjQ869MEVk1U",
    authDomain: "valepertutti-d6c04.firebaseapp.com",
    projectId: "valepertutti-d6c04",
    storageBucket: "valepertutti-d6c04.firebasestorage.app",
    messagingSenderId: "808749147791",
    appId: "1:808749147791:web:6fd1bce9d917ab6f3c32fa"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);

export { db };
