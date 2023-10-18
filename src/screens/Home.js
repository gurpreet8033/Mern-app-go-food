import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import Accordian from "../components/Accordian";
import Assign from "../components/Assign";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* <Accordian /> */}

      <div>{/* <Assign /> */}</div>
      <div>
        <Carousal />
      </div>
      <div>
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
