import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require("./shape-bg.png")}
          alt="There is no internet connection"
        />
      </div>
    </div>
  );
}
