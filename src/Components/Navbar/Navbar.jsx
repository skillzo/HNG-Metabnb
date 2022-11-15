import React, { useState } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../..//assest/img/Vector-1.png";
import Wrapper2 from "../UI/Wrapper2/Wrapper";
import { Link } from "react-router-dom";
import { useStore } from "../../Store/Context";
function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const { setIsOpened } = useStore();
  function clickHandler() {
    isClicked === false ? setIsClicked(true) : setIsClicked(false);
  }

  return (
    <>
      <nav className="navbar-container__mobile">
        <Link to="/">
          <div className="navbar-logo">
            <img src={logo} alt="" />

            <div className="navbar-logo__text">
              <span>M</span>etabnb
            </div>
          </div>
        </Link>

        <div
          className="navbar-items"
          style={{ display: !isClicked ? "none" : "block" }}
        >
          <nav>
            <ul>
              <Link to="/">
                <li onClick={() => setIsClicked(false)}>Home</li>
              </Link>
              <Link to="/placetostay">
                <li onClick={() => setIsClicked(false)}>Place to stay</li>
              </Link>
              <li onClick={() => setIsClicked(false)}>NFTs</li>
              <li onClick={() => setIsClicked(false)}>Community</li>
            </ul>
          </nav>

          <button
            onClick={() => {
              setIsClicked(false);
              setIsOpened(true);
            }}
            className="button1 connect-wallet"
          >
            Connect wallet
          </button>
        </div>
        <div className="navbar-mobile" onClick={clickHandler}>
          {!isClicked ? <MenuIcon /> : <CloseIcon />}
        </div>
      </nav>

      {/* destop nav */}
      <Wrapper2>
        <nav className="navbar-container__desktop">
          <Link to="/">
            <div className="navbar-logo">
              <img src={logo} alt="" />
              <div className="navbar-logo__text">
                <span>M</span>etabnb
              </div>
            </div>
          </Link>

          <div className="navbar-deskop__items">
            <nav>
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/placetostay">
                  <li>Place to stay</li>
                </Link>
                <li>Nfts</li>
                <li>Community</li>
              </ul>
            </nav>
          </div>
          <button onClick={() => setIsOpened(true)} className="button1">
            Connect wallet
          </button>
        </nav>
      </Wrapper2>
    </>
  );
}

export default Navbar;
