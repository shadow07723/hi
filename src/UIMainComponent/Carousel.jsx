import React, { useState, useEffect } from "react";
import { Link } from "react-router";
const Carousel = () => {
  const images = [
    { src: "https://picsum.photos/200/300?random=7", link: "/Adhar" },
    { src: "https://picsum.photos/200/300?random=5", link: "/Adhar" },
    { src: "https://picsum.photos/200/300?random=4", link: "/Adhar" },
    { src: "https://picsum.photos/200/300?random=3", link: "/Adhar" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(true);
    }, 200); // short delay for fade-out
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 200);
  };

  // ---- AUTO SLIDE EVERY 3 SECONDS ----
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  // -------------------------------------

  return (
    <div className="flex justify-center ">
    <div className="relative w-full max-w-4xl my-4 px-4">
      {/* Fade Animation Image */}
      <Link to={images[currentIndex].link}>
        <img
          src={images[currentIndex].src}
          alt="carousel"
          className={`w-full h-[25vh] md:h-[30vh] lg:h-[35vh] xl:h-[40vh] object-center rounded-2xl shadow-2xl transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
      </Link>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-yellow-50 text-white p-2 rounded-full hover:bg-gray-600 h-20 md:h-40vh lg:h-40 xl:h-40"
      ></button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-yellow-50 text-white p-2 rounded-full hover:bg-gray-600 h-20 md:h-40vh lg:h-40 xl:h-40"
      ></button>

      {/* Dots */}
      <div className="flex justify-center mt-3 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setFade(false);
              setTimeout(() => {
                setCurrentIndex(index);
                setFade(true);
              }, 200);
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Carousel;
