import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data"

export default function App() {
  const cards = data.map((item) => {
    return <Card img={item.coverImg} icon={item.iconImg} alt={item.alt} rating={item.stats.rating} title={item.title} price={item.price} />;
  });
  return (
    <div className="header">
      <Navbar />
      <Header />
      <div className="card-container">
        {cards}
      </div>
    </div>
  );
}
