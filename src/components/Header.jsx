import photo_grid from "./img/rocket-grid.jpg";

export default function Header() {
  return (
    <section>
      <div className="left">
        <h1>Rocket Experiences</h1>
        <p>Enjoy unique interactive and interesting adventure activities led by one of a kind hosts and join in an adventure.</p>
      </div>

      <div className="right">
        <img src={photo_grid} alt="photogrid" className="hero_photo" />
      </div>
    </section>
  );
}
