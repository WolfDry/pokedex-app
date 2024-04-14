// Importez les fonctions dont vous avez besoin des SDK que vous utilisez
import { initializeApp } from "firebase/app";

// Votre configuration Firebase pour votre application web
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    databaseURL: "https://pokedex-6556e-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialisez Firebase
export const app = initializeApp(firebaseConfig);
