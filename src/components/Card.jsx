import React from "react";

export default function Card(props) {
  const bgVariants = {
    Beginner: "rgb(203, 243, 156)",
    Master: "rgb(243, 226, 156)",
    Professional: "rgb(243, 162, 156)",
  };

  let color = bgVariants[props.level];

  const level = {
    backgroundColor: color,
  };

  let AddItem = () => {
    let item = document.getElementById("message");
    item.innerText = props.title;
    setTimeout(function () {
      item.innerText = null
    }, 4000);
  };

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
          <p id="title">{props.title}</p>
          <p id="level" style={level}>
            {props.level}
          </p>
          <p>{props.price}€ / person</p>
          <a href={`https://${props.paymentUrl}`} onClick={AddItem} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
