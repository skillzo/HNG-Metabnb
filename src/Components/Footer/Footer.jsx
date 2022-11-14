import React from "react";
import footerLogo from "../../assest/img/hero2.png";
import "./footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer>
      <div className="footer footer-main">
        <div className="footer-logo">
          <img src={footerLogo} alt="" />
          <div className="foooter-logo__text">Metabnb</div>
        </div>
        <div className="footer-socials">
          <div className="footer-socials__main">
            <div className="socials">
              <FacebookIcon />
            </div>
            <div className="socials">
              <InstagramIcon />
            </div>
            <div className="socials">
              <TwitterIcon />
            </div>
          </div>
          <div className="social1"> &copy; 2022 Metabnb</div>
        </div>
      </div>
      {/* 2 */}
      <div className="footer">
        <h2>Community</h2>
        <p>NFT</p>
        <p>Tokens</p>
        <p>Landlords</p>
        <p>Discord</p>
      </div>
      {/* 3 */}
      <div className="footer">
        <h2>Places</h2>
        <p>Castle</p>
        <p>Farms</p>
        <p>Beach</p>
        <p>Learn more</p>
      </div>
      {/* 4 */}
      <div className="footer">
        <h2>About Us</h2>
        <p>Road map</p>
        <p>Creators</p>
        <p>Career</p>
        <p>Contact us</p>
      </div>
      <div className="footer-socials__mobile">
        <div className="footer-socials__main">
          <div className="socials">
            <FacebookIcon />
          </div>
          <div className="socials">
            <InstagramIcon />
          </div>
          <div className="socials">
            <TwitterIcon />
          </div>
        </div>
        <div className="social1"> &copy; 2022 Metabnb</div>
      </div>
    </footer>
  );
}

export default Footer;
