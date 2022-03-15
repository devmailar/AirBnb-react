import photo_grid from "../images/rocket-grid.jpg";

export default function Header() {
  return (
    <section>
      <div className="left">
        <h1>Rocket Experiences</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nostrum sint exercitationem ut similique sunt.</p>
      </div>

      <div className="right">
        <img src={photo_grid} alt="photogrid" className="hero_photo" />
      </div>
    </section>
  );
}
