import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmt8t7jU4MXuKm06ufNrTvvDdPIjh3sVk",
  authDomain: "team-mystic-7.firebaseapp.com",
  projectId: "team-mystic-7",
  storageBucket: "team-mystic-7.appspot.com",
  messagingSenderId: "696854334899",
  appId: "1:696854334899:web:3486508aa55cccf78a4fc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = (setUser) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      setUser(result.user);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logout = (setUser) => {
  signOut(auth)
    .then(() => {
      console.log("Successfully logged out!");
      setUser();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const db = getFirestore(app);
