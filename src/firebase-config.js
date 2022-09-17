import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmt8t7jU4MXuKm06ufNrTvvDdPIjh3sVk",
  authDomain: "team-mystic-7.firebaseapp.com",
  projectId: "team-mystic-7",
  storageBucket: "team-mystic-7.appspot.com",
  messagingSenderId: "696854334899",
  appId: "1:696854334899:web:3486508aa55cccf78a4fc6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);