import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Index";
import CarbonFootprintMap from "./CarbonFootprintMap";
import About from "./About";
import ContactHelp from "./ContactHelp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Index />} />
        <Route path = "/carbonFootprintMap" element = {<CarbonFootprintMap />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<ContactHelp />} />
      </Routes>
    </Router>
  );
}

export default App;