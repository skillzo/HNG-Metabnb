import "./App.css";

function App() {
  return (
    <div className="container">
      {/* /////////////navbar mobile //////// */}
      <div className="navbar-container__mobile">
        <div className="navbar-logo">
          <img src="" alt="" />
        </div>
        <div className="navbar-mobile">toggle</div>

        <div className="navbar-items">
          <nav>
            <ul>
              <li>Home</li>
              <li>Place to stay</li>
              <li>Nfts</li>
              <li>Community</li>
            </ul>
          </nav>

          <button className="button1">Connect wallet</button>
        </div>
      </div>
      {/* Navbar mobile ends here */}

      {/* hero section */}
      <div className="header">
        <div className="header-main">
          <div className="header-text">
            <h1>
              Rent a place away from <br /> Home in the meteverse
            </h1>
            <p>
              we provide you access to luxury and affordable houses in the
              metaverse, get a chnace to turn yout imagination to reality at
              your comfort zone.
            </p>
            <div className="header-search">
              <input type="search" />
              <button>Search</button>
            </div>
          </div>
          <div className="header-img">
            <img src="" alt="" />
          </div>
        </div>
        <div className="header-sponsors">
          <div className="sponsor">
            <img src="" alt="" />
            <div>MBToken</div>
          </div>
          <div className="sponsor">
            <img src="" alt="" />
            <div>METEMASK</div>
          </div>
          <div className="sponsor">
            <img src="" alt="" />
            <div>OpenSea</div>
          </div>
        </div>
      </div>
      {/* header ends here */}

      {/* nfts container */}
      <section id="hero-body" className="hero-body">
        <h2>Inspiration for your next adventure</h2>
        <div className="nft-section__main">
          <div className="nft-container">
            <div className="nft-fave__icon">Love</div>
            <div className="nft-image">
              <img src="" alt="" />
            </div>
            <div className="nft-details">
              <div className="nft-name">
                <div className="nft-name"> Desert King</div>
                <div className="nft-price"> 1MBT per night</div>
              </div>
              <div className="nft-name">
                <div className="nft-name"> Desert King</div>
                <div className="nft-price"> 1MBT per night</div>
              </div>
              <div className="nft-ratings">
                <div>Five Star logo here</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* nft container ends  */}

      <section id="hero-body2" className="hero-body2">
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
          <img src="" alt="" />
        </div>
      </section>
      {/* hero body 2 ends  */}

      {/* footer */}
      <footer>
        <div className="footer footer-main">
          <img src="" alt="" />
          <div className="footer-socials">
            <div className="social1">logo logo logo</div>
            <div className="social1"> 2022 Metabnb</div>
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
          <p>Road map</p>
          <p>Creators</p>
          <p>Career</p>
          <p>Contact us</p>
        </div>
      </footer>
      {/* footer ends */}
      {/* page ends */}
    </div>
  );
}

export default App;
