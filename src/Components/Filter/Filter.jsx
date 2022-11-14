import React from "react";
import "./filter.css";
import TuneIcon from "@mui/icons-material/Tune";

function Filter() {
  return (
    <div className="filter-container">
      <div className="filter">Resturant</div>
      <div className="filter">Cottage</div>
      <div className="filter">Castle</div>
      <div className="filter">Beach</div>
      <div className="filter">Carbins</div>
      <div className="filter">Off-Grid</div>
      <div className="filter">Farm</div>
      <div className="filter filter2">
        <>Location</> <TuneIcon />
      </div>
    </div>
  );
}

export default Filter;
