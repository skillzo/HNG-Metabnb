import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Navigation/Home";
import PlaceToStay from "./Navigation/PlaceToStay";
import { ContextProvider } from "./Store/Context";

function App() {
  return (
    <ContextProvider>
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/placetostay" element={<PlaceToStay />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
