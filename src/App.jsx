import React from "react";
import {Link , Routes, Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import Branches from "./Sections/Branches";
import AboutUs from "./Sections/AboutUs";
import Menyu from "./pages/Menyu";
export default function App() {
  return (
    <div className="">
      <Navbar />
      <Menyu/>
      <AboutUs />
      <Branches />

    </div>

  );
}