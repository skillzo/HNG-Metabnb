import React from "react";
import hero3 from "./hero3.png";
import "./section3.css";
function Section3() {
  return (
    <section id="hero-body2" className="hero-body2">
      <div className="hero-body2__wrapper">
        <div className="hero-body2__text">
          <h2>Metabnb NFTs</h2>

          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className="button2">Learn More</button>
        </div>
        <div className="hero-body2__image">
          <img src={hero3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Section3;
