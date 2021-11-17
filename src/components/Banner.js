import React from "react";
import logo512 from "../res/logo512.png";
import "../index.css";

function Banner() {
  return (
    <div>
      <img
        src={logo512}
        alt="logo-img"
        style={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "10px 10px 0px 0px",
          backgroundColor: "black",
          width: "317px",
        }}
        width="317px"
      />
    </div>
  );
}

export default Banner;
