import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBta-djZU_6oJuA98BcebC5z7bDr_1B2vU",
    authDomain: "task-1f0e7.firebaseapp.com",
    projectId: "task-1f0e7",
    storageBucket: "task-1f0e7.appspot.com",
    messagingSenderId: "1069972839078",
    appId: "1:1069972839078:web:c75270f7ee07410a67b267",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
