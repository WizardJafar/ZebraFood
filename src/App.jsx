import React from "react";

import Navbar from "./components/Navbar";
import Branches from "./Sections/Branches";
import AboutUs from "./Sections/AboutUs";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <AboutUs />
      <Branches />
    </div>

  );
}