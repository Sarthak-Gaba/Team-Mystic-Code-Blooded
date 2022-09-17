import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { logout, signInWithGoogle, auth } from "./firebase-config"
import Nav from "./Components/Nav"
import Search from "./Components/Search";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from './Components/Profile/Profile'
import Pdffile from "./Components/Pdffile";
import Imagerender from "./Components/Carousel";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (

    <div className="App">

      <Nav user={user} setuser={setUser} />
      <Routes>
        <Route exact path="/home" element={<Pdffile user={user} setuser={setUser} />} />
        <Route exact path="/profile" element={<Profile user={user} setuser={setUser} />} />
      </Routes>
      <Search />

      {/* <Imagerender /> */}
    </div>
  );
}

export default App;