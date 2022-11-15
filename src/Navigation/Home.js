import React from "react";
import "../App.css";
import Modal from "../Components/Modal/modal";
import Wrapper from "../Components/UI/Wrapper/Wrapper";
import Section1 from "../Sections/section1/Section1";
import Section2 from "../Sections/Section2/Section2";
import Section3 from "../Sections/Section3/Section3";

function Home() {
  return (
    <div>
      <Wrapper>
        <Modal />
        <Section1 />
        <Section2 />
      </Wrapper>
      <Section3 />
    </div>
  );
}

export default Home;
