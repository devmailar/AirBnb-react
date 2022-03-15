import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import API from "./API";

export default function App() {
  return (
    <div className="header">
      <Navbar />
      <Header />
      <div className="card-container">
        <Card img="qeAknsrFRHRvjIq2HrlBsmYy2KL.jpg" icon="star.png" alt="hey" rating="5.0" title="hey" price={4542} />
        <Card img="rAjFTXJwUHguhoz03KRbvSMVLuH.jpg" icon="star.png" alt="hey" rating="5.0" title="hey" price={4542} />
        <Card img="pHxxkaRtiCTDX3tOi1V7aZfOPKO.jpg" icon="star.png" alt="hey" rating="5.0" title="hey" price={4542} />
        <Card img="wwZpd8kJS3bPXPg4Bb4FTc3Sj9P.jpg" icon="star.png" alt="hey" rating="5.0" title="hey" price={4542} />
        <Card img="ge8UCw3MwHHbGjV5fxt8kYFBu1u.jpg" icon="star.png" alt="hey" rating="5.0" title="hey" price={4542} />
        <Card img="2U3eaEw932PPlsDtvaY6CwGpAkx.jpg" icon="star.png" alt="hey" rating="5.0" title="hey" price={4542} />
        <Card img="iuk8tKnme2qjFB0wHTaCqJbGuhf.jpg" icon="star.png" alt="hey" rating="5.0" title="hey" price={4542} />
        <Card img="4VX7SSfVlqpcLJBl8y0aORhIyz3.jpg" icon="star.png" alt="hey" rating="5.0" title="hey" price={4542} />
        <Card img="ocmG9jo7aorZtjmewSbfwQuJr95.jpg" icon="star.png" alt="hey" rating="5.0" title="hey" price={4542} />
        <Card img="clHcc3eKQ1G8viynMQgfF5btLuW.jpg" icon="star.png" alt="hey" rating="5.0" title="hey" price={4542} />
        <Card img="a7aJ1gIrscAY40cacFFTfkjw1nY.jpg" icon="star.png" alt="hey" rating="5.0" title="hey" price={4542} />
        <Card img="mRhEg5hBCSi2aOdercqLC3AmT0A.jpg" icon="star.png" alt="hey" rating="5.0" title="hey" price={4542} />
        <Card img="68uzZuliHml6WGOvbaNU3LJ2Lo0.jpg" icon="star.png" alt="hey" rating="5.0" title="hey" price={4542} />
        <Card img="g4Q0mIg0Ll5CCvChJTQwaoUUMvW.jpg" icon="star.png" alt="hey" rating="5.0" title="hey" price={4542} />
        <Card img="43YodvrEgU1iSRlzQmoXidsqUXp.jpg" icon="star.png" alt="hey" rating="5.0" title="hey" price={4542} />
        <Card img="28RdPSLHK6tTkbx9gFKJonrlC6t.jpg" icon="star.png" alt="hey" rating="5.0" title="hey" price={4542} />
      </div>
      <API />
    </div>
  );
}
