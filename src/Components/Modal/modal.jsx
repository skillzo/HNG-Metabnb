import React from "react";
import "./modal.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CloseIcon from "@mui/icons-material/Close";
import image1 from "../../assest/img/icons/image 66.png";
import image2 from "../../assest/img/icons/image 69.png";

function Modal({ isOpened, openHandler }) {
  return (
    <div
      className="modal-container"
      style={{ display: !isOpened ? "none" : "flex" }}
      onClick={openHandler}
    >
      <div className="modal">
        <div className="modal-heading">
          <h2>Connect Wallet</h2>
          <CloseIcon onClick={openHandler} />
        </div>
        <div className="modal-main__container">
          <p>Choose your preferred wallet</p>
          <div className="modal-main1" onClick={openHandler}>
            <div className="modal-main">
              <img src={image1} alt="" />
              <p>Metamask</p>
            </div>
            <NavigateNextIcon />
          </div>
          <div className="modal-main1" onClick={openHandler}>
            <div className="modal-main">
              <img src={image2} alt="" />
              <p>WalletConnect</p>
            </div>
            <NavigateNextIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
