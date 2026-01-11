import { useState, useEffect } from "react";
import Result2025 from "./Result2025/Result2025";

export default function MPBord() {
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
      onMouseEnter={() => !isTouchDevice && setOpen(true)} // Desktop hover
      onMouseLeave={() => !isTouchDevice && setOpen(false)} // Desktop hover
    >
      {/* Button */}
      <button
        className="text-white rounded-lg"
        onClick={() => isTouchDevice && setOpen(!open)} // Touch devices click
      >
        MP Bord▼
      </button>

      {/* Desktop Dropdown */}
      {!isTouchDevice && open && (
        <div className="absolute right-31 top-0 w-40 bg-gray-700 rounded-lg shadow-lg border z-50">
          <ul className="py-2">
            <li className="px-4  py-2 hover:bg-black cursor-pointer"><Result2025 /></li>
          </ul>
        </div>
      )}

      {/* Mobile/Tablet Dropdown */}
      {isTouchDevice && open && (
        <div className="mt-2 w-full bg-gray-800 rounded-lg shadow-lg border z-50">
          <ul className="py-2">
            <li className="px-4 py-2 border-b border-gray-700"><Result2025 /></li>
          </ul>
        </div>
      )}
    </div>
  );
}
