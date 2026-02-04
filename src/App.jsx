import React from "react";

import Navbar from "./components/Navbar";
import Branches from "./Sections/Branches";
import AboutUs from "./Sections/AboutUs";
import FeedbackForm from "./Sections/FeedbackForm";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="">
      <Navbar />
      <AboutUs />
      <Branches />
      <FeedbackForm />
      <Footer />
    </div>

  );
}