import React from "react";

const SinglePage = () => {
  // Array of 10 video objects
  const cards = [
    { id: 1, src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, src: "https://www.w3schools.com/html/movie.mp4" },
    { id: 3, src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 4, src: "https://www.w3schools.com/html/movie.mp4" },
    { id: 5, src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 6, src: "https://www.w3schools.com/html/movie.mp4" },
    { id: 7, src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 8, src: "https://www.w3schools.com/html/movie.mp4" },
    { id: 9, src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 10, src: "https://www.w3schools.com/html/movie.mp4" },
  ];

  return (
    <div className="pb-6 ">
      {/* Header */}
      <h1 className="text-3xl font-bold  text-center">
        My Single Page App
      </h1>

      {/* Horizontal Scroll Cards */}
      <div className="flex  overflow-x-auto space-x-4 pt-4 scrollbar-hide">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 w-45 h-60 bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-lg font-semibold overflow-hidden"
          >
            <video
              src={card.src}
              controls
              className="w-45 h-60 object-cover rounded-t-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
