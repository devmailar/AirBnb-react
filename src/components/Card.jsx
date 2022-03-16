import React from "react"

export default function Card(props) {
  return (
    <div className="card">
      <div className="card_header">
        <img src={`../images/${props.img}`} alt={props.alt} className="character_img" />
      </div>
      <div className="card_info">
        <div className="rating">
          <img src={`../images/${props.icon}`} alt="star" className="card_star" />
          <span>{props.rating}</span>
        </div>
        <div className="content">
          <p>{props.title}</p>
          <p>{props.price}€ / person</p>
        </div>
      </div>
    </div>
  );
}
