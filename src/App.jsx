import React from "react";
import { Routes, Route } from "react-router";
import Home from "./HomePage/Home.jsx";
import Adhar from "./MenuOpt/Adhar/Adhar.jsx";
import DownlodeAdhar from "./MenuOpt/DownlodeAdhar.jsx";

function App() {
  return (
    <div>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        {/* Adhar */}
        <Route path="/Adhar" element={<Adhar />} />
        <Route path="/DownlodeAdhar" element={<DownlodeAdhar />} />
      </Routes>
    </div>
  );
}

export default App;
