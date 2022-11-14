import React from "react";
import Wrapper2 from "../../Components/UI/Wrapper2/Wrapper";
import Nft from "./Nft";
import "./section2.css";
import { data } from "../../assest/Houses/ImageData/Data.js";
function section2() {
  return (
    <Wrapper2>
      <section id="hero-body" className="hero-body">
        <h2>Inspiration for your next adventure</h2>
        <div className="nft-section__main">
          {data.slice(0, 8).map((house) => {
            return <Nft key={house.id} id={house.id} image={house.image} />;
          })}
        </div>
      </section>
    </Wrapper2>
  );
}

export default section2;
