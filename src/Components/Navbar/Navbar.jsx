import React, { useState } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../..//assest/img/Vector-1.png";
import Wrapper2 from "../UI/Wrapper2/Wrapper";

function Navbar() {
  const [isClicked, setIsClicked] = useState(true);
  function clickHandler() {
    if (isClicked === false) {
      setIsClicked(true);
    } else if (isClicked === true) {
      setIsClicked(false);
    }
  }

  return (
    <>
      <nav className="navbar-container__mobile">
        <div className="navbar-logo">
          <img src={logo} alt="" />
          <div className="navbar-logo__text">
            <span>M</span>etabnb
          </div>
        </div>

        <div
          className="navbar-items"
          style={{ display: isClicked ? "none" : "block" }}
        >
          <nav>
            <ul>
              <li>Home</li>
              <li>Place to stay</li>
              <li>Nfts</li>
              <li>Community</li>
            </ul>
          </nav>

          <button className="button1 connect-wallet">Connect wallet</button>
        </div>
        <div className="navbar-mobile" onClick={clickHandler}>
          {isClicked ? <MenuIcon /> : <CloseIcon />}
        </div>
      </nav>

      {/* destop nav */}
      <Wrapper2>
        <nav className="navbar-container__desktop">
          <div className="navbar-logo">
            <img src={logo} alt="" />
            <div className="navbar-logo__text">
              <span>M</span>etabnb
            </div>
          </div>

          <div className="navbar-deskop__items">
            <nav>
              <ul>
                <li>Home</li>
                <li>Place to stay</li>
                <li>Nfts</li>
                <li>Community</li>
              </ul>
            </nav>
          </div>
          <button className="button1">Connect wallet</button>
        </nav>
      </Wrapper2>
    </>
  );
}

export default Navbar;
