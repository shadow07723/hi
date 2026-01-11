import React from "react";
import { Routes, Route } from "react-router";
import Home from "./HomePage/Home.jsx";
import MainExam2025 from "./MPBord/Result2025/MainExam2025/MainExam2025.jsx";
import SecondryExam2025 from "./MPBord/Result2025/SecondryExam2025/SecondryExam2025.jsx";

function App() {
  return (
    <div>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />

        
        <Route path="/mainexam2025" element={<MainExam2025 />} />
        <Route path="/secondryexam2025" element={<SecondryExam2025 />} />
      </Routes>
    </div>
  );
}

export default App;
