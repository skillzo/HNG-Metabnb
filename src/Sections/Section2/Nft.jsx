import React from "react";
import { Ratings } from "../../Components/UI/Button/Button";
import "./section2.css";
function Nft({ image }) {
  return (
    <div className="nft-container">
      <div className="nft-image">
        <img src={image} alt="" />
      </div>
      <div className="nft-details">
        <div className="nft-name">
          <div className="nft-name__main"> Desert King</div>
          <div className="nft-price"> 1MBT per night</div>
        </div>
        <div className="nft-name">
          <div className="nft-distance"> 2345Km away</div>
          <div className="nft-time"> available for 2weeks stay</div>
        </div>
        <div className="nft-ratings">
          <div>
            <Ratings />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nft;
