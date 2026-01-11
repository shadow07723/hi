import React from "react";
import Carousel from "../UIMainComponent/Carousel.jsx";
import Card from "../UIMainComponent/Card.jsx";
import HorizontalScrollCards from "../UIMainComponent/HorizontalScrollCards.jsx";
import Footer from "../UIMainComponent/Footer.jsx";

function Home() {
  return (
    <div className="  bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 ">
      <Carousel />
      <Card />
      <HorizontalScrollCards />
      <Footer />
    </div>
  );
}

export default Home;
