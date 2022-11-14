import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Navigation/Home";
import PlaceToStay from "./Navigation/PlaceToStay";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/placetostay" element={<PlaceToStay />} />
      </Routes>
    </div>
  );
}

export default App;
