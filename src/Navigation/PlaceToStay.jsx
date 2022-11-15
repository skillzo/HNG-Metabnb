import React from "react";
import "./placetostay.css";
import "../Sections/Section2/section2.css";
import { data } from "../assest/Houses/ImageData/Data.js";
import Nft from "../Sections/Section2/Nft";
import Filter from "../Components/Filter/Filter";
import Wrapper from "../Components/UI/Wrapper/Wrapper";
import Wrapper2 from "../Components/UI/Wrapper2/Wrapper";
import Modal from "../Components/Modal/modal";

function PlaceToStay() {
  return (
    <div>
      <Modal />
      <Wrapper2>
        <Wrapper>
          <Filter />
          <section id="hero-body" className="hero-body placetostay-contaner">
            <div className="nft-section__main">
              {data.map((house) => {
                return <Nft key={house.id} id={house.id} image={house.image} />;
              })}
            </div>
          </section>
        </Wrapper>{" "}
      </Wrapper2>
    </div>
  );
}

export default PlaceToStay;
