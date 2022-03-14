import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="header">
      <Navbar />
      <Header />
      <div className="card-container">
        <Card img="katie-zaferes.png" alt="hey" rating="5.0" title="Life Lessons with Katie Zaferes" price={136} />
        <Card img="katie-zaferes.png" alt="moi" rating="5.0" title="Life Lessons with Katie Zaferes" price={136} />
      </div>
    </div>
  );
}
