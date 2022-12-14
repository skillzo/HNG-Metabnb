import React from "react";
import "./section1.css";
import hero1 from "../../assest/img/hero1.png";
import Wrapper2 from "../../Components/UI/Wrapper2/Wrapper";
import icon1 from "../../assest/img/icons/Group 4038.png";
import icon2 from "../../assest/img/icons/Group 59481.png";
import icon3 from "../../assest/img/icons/Subtract.png";

function Section1() {
  return (
    <section className="header">
      <Wrapper2>
        <div className="header-main">
          <div className="header-text">
            <h1>
              Rent a <span>Place</span> away from <span>Home </span> in the{" "}
              <span>Meteverse</span>
            </h1>
            <p>
              We provide you access to luxury and affordable houses in the
              metaverse, get a chnace to turn yout imagination to reality at
              your comfort zone.
            </p>
            <div className="header-search">
              <input type="search" placeholder="Search for location" />
              <button className="button1">Search</button>
            </div>
          </div>
          <div className="header-img">
            <img src={hero1} alt="" />
          </div>
        </div>{" "}
      </Wrapper2>
      <div className="header-sponsors">
        <div className="sponsor">
          <img src={icon2} alt="" />
          <div>MBToken</div>
        </div>
        <div className="sponsor">
          <img src={icon1} alt="" />
          <div>METEMASK</div>
        </div>
        <div className="sponsor">
          <img src={icon3} alt="" />
          <div>OpenSea</div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
