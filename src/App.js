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
import Search from "./Components/Search";

function App() {


  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;