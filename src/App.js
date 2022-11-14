import "./App.css";
import Footer from "./Components/Footer/Footer";

import Navbar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/UI/Wrapper/Wrapper";
import Section1 from "./Sections/section1/Section1";
import Section2 from "./Sections/Section2/Section2";
import Section3 from "./Sections/Section3/Section3";

function App() {
  return (
    <div className="container">
      {/* /////////////navbar mobile //////// */}
      <Wrapper>
        <Navbar />
        <Section1 />
        <Section2 />
      </Wrapper>
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;
