import { useState, useEffect } from "react";

export default function News() {
  const [open, setOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device (mobile + tablet)
  useEffect(() => {
    const checkTouch = () => {
      const hasTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;

      setIsTouchDevice(hasTouch);
    };

    checkTouch(); // initial check
    window.addEventListener("resize", checkTouch);

    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => !isTouchDevice && setOpen(true)}   // Desktop hover
      onMouseLeave={() => !isTouchDevice && setOpen(false)} // Desktop hover
    >
      {/* Button */}
      <button
        className="text-white rounded-lg"
        onClick={() => isTouchDevice && setOpen(!open)} // Touch devices click
      >
        News▼
      </button>

      {/* Desktop Dropdown */}
      {!isTouchDevice && open && (
        <div className="absolute right-0 w-40 bg-gray-700 rounded-lg shadow-lg border z-50">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-black cursor-pointer">Adhar</li>
            <li className="px-4 py-2 hover:bg-black cursor-pointer">Pan Card</li>
            <li className="px-4 py-2 hover:bg-black cursor-pointer">Sambhal Card</li>
            <li className="px-4 py-2 hover:bg-black cursor-pointer">E-Shram Card</li>
            <li className="px-4 py-2 hover:bg-black cursor-pointer">Voter ID</li>
            <li className="px-4 py-2 hover:bg-black cursor-pointer">Ayushman Card</li>
            <li className="px-4 py-2 hover:bg-black cursor-pointer">Driving Licence</li>
            <li className="px-4 py-2 hover:bg-black cursor-pointer">Income Certificate</li>
            <li className="px-4 py-2 hover:bg-black cursor-pointer">Caste Certificate</li>
            <li className="px-4 py-2 hover:bg-black cursor-pointer">Domicile Certificate</li>
          </ul>
        </div>
      )}

      {/* Mobile/Tablet Dropdown */}
      {isTouchDevice && open && (
        <div className="mt-2 w-full bg-gray-800 rounded-lg shadow-lg border z-50">
          <ul className="py-2">
            <li className="px-4 py-2 border-b border-gray-700">Adhar</li>
            <li className="px-4 py-2 border-b border-gray-700">Pan Card</li>
            <li className="px-4 py-2 border-b border-gray-700">Sambhal Card</li>
            <li className="px-4 py-2 border-b border-gray-700">E-Shram Card</li>
            <li className="px-4 py-2 border-b border-gray-700">Voter ID</li>
            <li className="px-4 py-2 border-b border-gray-700">Ayushman Card</li>
            <li className="px-4 py-2 border-b border-gray-700">Driving Licence</li>
            <li className="px-4 py-2 border-b border-gray-700">Income Certificate</li>
            <li className="px-4 py-2 border-b border-gray-700">Caste Certificate</li>
            <li className="px-4 py-2">Domicile Certificate</li>
          </ul>
        </div>
      )}
    </div>
  );
}