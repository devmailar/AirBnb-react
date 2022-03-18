import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        icon={item.coverIcon}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        level={item.level}
        price={item.price}
        paymentUrl={item.paymentUrl}
      />
    );
  });
  return (
    <div className="header">
      <Navbar />
      <Header />
      <div className="card-container">
        <div className="wrapper">
          <h1>Our list of activities</h1>
          <h2>To try out</h2>
          {cards}
          <div className="alert">
            <p className="sub_message">
              <i className="fa-solid fa-cart-shopping"></i>: <span id="message"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
