import photo_grid from "./img/photo-grid.png";

export default function Article() {
  return (
    <section>
      <div className="left">
        <h1>Online Experiences</h1>
        <p>Join unique experience activities led by one-of-a-kind hosts-all without leaving home.</p>
      </div>

      <div className="right">
        <img src={photo_grid} alt="photogrid" className="hero_photo" />
      </div>
    </section>
  );
}
