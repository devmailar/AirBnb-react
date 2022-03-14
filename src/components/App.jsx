import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Card";
import data from "../data";

export default function App() {
  const cards = data.map((item) => {
    return <Card img={`./img/${item.coverImg}`} rating={item.stats.rating} title={item.title} price={item.price} />;
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
