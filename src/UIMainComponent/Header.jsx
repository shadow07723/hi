import React, { useState } from "react";
import { Link } from "react-router";
import Menu from "../HeaderDropdown/menu";
import Farmar from "../HeaderDropdown/Farmar.jsx";
import Education from "../HeaderDropdown/Education.jsx";
import News from "../HeaderDropdown/News";


function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between px-4 py-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white items-center sticky top-0 z-50">
        {/* Left Title */}
        <div className="text-xl font-bold">My Application Header</div>

        {/* Desktop Menu */}
        <div className="hidden 2xl:flex  gap-6 text-lg">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Menu />
          <Farmar />
          <Education />
          <News />
        </div>

        {/* Mobile Button */}
        <button
          className="2xl:hidden text-3xl"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>
      </header>

      {/* Mobile Right-Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transition-all duration-300 z-50 overflow-y-auto
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setMobileOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>

        <div className="p-4 flex flex-col gap-4 text-lg">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Menu />
          <Farmar />
          <Education />
          <News />
        </div>
      </div>
    </>
  );
}

export default Header;
