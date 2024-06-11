// Importez les fonctions dont vous avez besoin des SDK que vous utilisez
import { initializeApp } from "firebase/app";

// Votre configuration Firebase pour votre application web
const firebaseConfig = {
    apiKey: "AIzaSyBrM0LKiaUwbs2gloTtIlzlSxHPkljDZUM",
    authDomain: "pokedex-6556e.firebaseapp.com",
    projectId: "pokedex-6556e",
    storageBucket: "pokedex-6556e.appspot.com",
    messagingSenderId: "404864180104",
    appId: "1:404864180104:web:e0e58bde56a5a8cacb643d",
    databaseURL: "https://pokedex-6556e-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialisez Firebase
export const app = initializeApp(firebaseConfig);
