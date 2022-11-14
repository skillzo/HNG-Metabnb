import React from "react";
import "./section2.css";

function Nft() {
  return (
    <div className="nft-container">
      <div className="nft-fave__icon">Love</div>
      <div className="nft-image">
        <img src="" alt="" />
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
          <div>Five Star logo here</div>
        </div>
      </div>
    </div>
  );
}

export default Nft;
