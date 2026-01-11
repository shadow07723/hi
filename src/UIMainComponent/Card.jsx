import React from "react";
import { Link } from "react-router";

const Card = () => {
  // Array of 10 card objects
  const cards = [
    {
      id: 1,
      name: "Adhar Card",
      image: "https://s.yimg.com/zb/imgv1/9eda9855-ca48-371d-969b-c8f32dbbfb37/t_500x300 ",
      buttonText: <Link to="/Adhar"><button className="font-bold text-2xl">Adhar</button></Link>,
    },
    {
      id: 2,
      name: "navi upi",
      image: "https://tse1.mm.bing.net/th/id/OIP.L9xXh1pPuR6ke3pGng958AHaFj?pid=Api&P=0&h=180",
      buttonText:<Link to="/Navi"><button className="font-bold text-2xl">Navi UPI</button></Link>,
    },
    {
      id: 3,
      name: "Card 3",
      image: "https://picsum.photos/200/300?random=3",
      buttonText: "Click Me",
    },
    {
      id: 4,
      name: "Card 4",
      image: "https://picsum.photos/200/300?random=4",
      buttonText: "Click Me",
    },
    {
      id: 5,
      name: "Card 5",
      image: "https://picsum.photos/200/300?random=5",
      buttonText: "Click Me",
    },
    {
      id: 6,
      name: "Card 6",
      image: "https://picsum.photos/200/300?random=6",
      buttonText: "Click Me",
    },
    {
      id: 7,
      name: "Card 7",
      image: "https://picsum.photos/200/300?random=7",
      buttonText: "Click Me",
    },
    {
      id: 8,
      name: "Card 8",
      image: "https://picsum.photos/200/300?random=8",
      buttonText: "Click Me",
    },
    {
      id: 9,
      name: "Card 9",
      image: "https://picsum.photos/200/300?random=9",
      buttonText: "Click Me",
    },
    {
      id: 10,
      name: "Card 10",
      image: "https://picsum.photos/200/300?random=10",
      buttonText: "Click Me",
    },
    {
      id: 11,
      name: "Card 9",
      image: "https://picsum.photos/200/300?random=11",
      buttonText: "Click Me",
    },
    {
      id: 12,
      name: "Card 10",
      image: "https://picsum.photos/200/300?random=12",
      buttonText: "Click Me",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 ">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-gray-200 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow hover:scale-99 duration-300 ease-in-out"
        >
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-30 object-fill rounded-md mb-4 "
          />
          <h3 className="text-lg font-semibold mb-2">{card.name}</h3>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {card.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
