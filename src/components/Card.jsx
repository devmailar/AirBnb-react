import React from "react"

import icon_star from "../images/star.png";
import img_route from "../images/katie-zaferes.png";


export default function Card(props) {
  return (
    <div className="card">
      <div className="card_header">
        <img src={img_route} alt={props.alt} className="character_img" />
      </div>
      <div className="card_info">
        <div className="rating">
          <img src={icon_star} alt="star" className="card_star" />
          <span>{props.rating}</span>
        </div>
        <div className="content">
          <p>{props.title}</p>
          <p>From ${props.price} / person</p>
        </div>
      </div>
    </div>
  );
}
