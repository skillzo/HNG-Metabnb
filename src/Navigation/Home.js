import React, { useState } from "react";
import "../App.css";
import Footer from "../Components/Footer/Footer";
import Modal from "../Components/Modal/modal";
import Navbar from "../Components/Navbar/Navbar";
import Wrapper from "../Components/UI/Wrapper/Wrapper";
import Section1 from "../Sections/section1/Section1";
import Section2 from "../Sections/Section2/Section2";
import Section3 from "../Sections/Section3/Section3";

function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const openHandler = () => {
    isOpened === false ? setIsOpened(true) : setIsOpened(false);
  };
  return (
    <div>
      <Wrapper>
        <Navbar
          setIsOpened={setIsOpened}
          openHandler={openHandler}
          isOpened={isOpened}
        />
        <Modal openHandler={openHandler} isOpened={isOpened} />
        <Section1 />
        <Section2 />
      </Wrapper>
      <Section3 />
      <Footer />
    </div>
  );
}

export default Home;
