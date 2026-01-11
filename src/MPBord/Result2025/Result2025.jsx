import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Result2025() {
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
        Result2025▼
      </button>

      {/* Desktop Dropdown */}
      {!isTouchDevice && open && (
        <div className="absolute right-31 top-0 w-40 bg-gray-700 rounded-lg shadow-lg border z-50">
          <ul className="py-2">
            <li className="px-4  py-2 hover:bg-black cursor-pointer"><Link to="/mainexam2025">MainExam2025</Link></li>
            <li className="px-4  py-2 hover:bg-black cursor-pointer"><Link to="/secondryexam2025">Secondry Exam 2025</Link></li>
          </ul>
        </div>
      )}

      {/* Mobile/Tablet Dropdown */}
      {isTouchDevice && open && (
        <div className="mt-2 w-full bg-gray-800 rounded-lg shadow-lg border z-50">
          <ul className="py-2">
            <li className="px-4  py-2 hover:bg-black cursor-pointer"><Link to="/mainexam2025">MainExam2025</Link></li>
            <li className="px-4  py-2 hover:bg-black cursor-pointer"><Link to="/secondryexam2025">Secondry Exam 2025</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}
