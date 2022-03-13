import Navbar from "./Navbar";
import Article from "./Article";
import Card from "./Card";

import person1 from "./img/katie-zaferes.png";
import person2 from "./img/katie-zaferes.png";

export default function Header() {
  return (
    <div className="header">
      <Navbar />
      <Article />
      <div className="card-container">
        <Card img={person1} rating="5.0" title="Hello World" price={136} />
        <Card img={person2} rating="5.0" title="Hello World" price={136} />
        <Card img={person2} rating="5.0" title="Hello World" price={136} />
        <Card img={person2} rating="5.0" title="Hello World" price={136} />
        <Card img={person2} rating="5.0" title="Hello World" price={136} />
      </div>
    </div>
  );
}
