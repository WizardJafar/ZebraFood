import React from "react";
import {Link , Routes, Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import Menyu from "./pages/Menyu";
export default function App() {
  return (
    <div className=" bg-[radial-gradient(1200px_500px_at_10%_0%,rgba(255,182,193,0.65)_0%,rgba(255,182,193,0.25)_35%,transparent_70%),radial-gradient(900px_450px_at_95%_25%,rgba(255,105,180,0.55)_0%,rgba(255,105,180,0.18)_40%,transparent_75%)] text-base-content">
      <Navbar />
      <Menyu/>


      
    </div>

  );
}