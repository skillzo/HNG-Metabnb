import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Navigation/Home";
import PlaceToStay from "./Navigation/PlaceToStay";
import { ContextProvider } from "./Store/Context";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <ContextProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/placetostay" element={<PlaceToStay />} />
        </Routes>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
