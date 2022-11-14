import React from "react";
import Wrapper2 from "../../Components/UI/Wrapper2/Wrapper";
import Nft from "./Nft";
import "./section2.css";

function section2() {
  return (
    <Wrapper2>
      <section id="hero-body" className="hero-body">
        <h2>Inspiration for your next adventure</h2>
        <div className="nft-section__main">
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
        </div>
      </section>
    </Wrapper2>
  );
}

export default section2;
