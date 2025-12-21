import React from "react";
import { Link } from "react-router-dom";

function CarbonFootprintMap() {
  return (
    <div>
      <nav>
        <Link to = "/"> Home </Link>
        <Link to = "/carbonFootprintMap"> Carbon Footprint Map </Link>
        <Link to = "/about"> About </Link>
        <Link to = "/contact"> Contact/Help </Link>
      </nav>
      <h1> Carbon Footprint Map </h1>
    </div>
  );
}

export default CarbonFootprintMap;