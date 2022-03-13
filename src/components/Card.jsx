import image from "./img/katie-zaferes.png";
import star from "./img/star.png";

export default function Card() {
  return (
    <div className="card">
      <div className="card_header">
        <img src={image} alt="katiezaferes" className="character_img" />
      </div>
      <div className="card_info">
        <div className="rating">
          <img src={star} alt="star" className="card_star" />
          <span>5.0</span>
        </div>
        <div className="content">
          <p>Life Lessons with Katie Zaferes</p>
          <p>From $1366 / person</p>
        </div>
      </div>
    </div>

    
  );
}
