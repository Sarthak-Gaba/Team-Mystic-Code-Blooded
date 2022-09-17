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


import Nav from "./Components/Nav"
import Search from "./Components/Search";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from './Components/Profile/Profile'
import Pdffile from "./Components/Pdffile";

function App() {


  return (
    <div className="App">

      <Nav />
      <Routes>
        <Route exact path="/home" element={<Pdffile/>} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
      <Search />
    </div>
  );
}

export default App;