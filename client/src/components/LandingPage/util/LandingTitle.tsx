import React, { useEffect, useState } from "react";
import "./LandingTitle.scss";

const LandingMain = () => {
  return (
    <div>
      <div
        className="Landing_title"
        style={{
          top: "-230px",
          left: "100px",
          opacity: "1",

          paddingBottom: "100px",
          overflowX: "hidden",
          width: "120%",
        }}
      >
        <section aria-label="Floating Logo">
          <div className="tilt">
            <span>H</span>
            <span>E</span>
            <span>L</span>
            <span>L</span>
            <span>O</span>
            <span>W</span>
            <span>!</span>
          </div>
          <div className="tilt">
            <span>J</span>
            <span>E</span>
            <span>J</span>
            <span>U</span>
          </div>
        </section>
      </div>
      <div
        style={{ position: "absolute", top: "170px", left: "400px" }}
        className="background lighthouse_style "
      >
        <div className="vale"></div>
        <div className="sea"></div>

        <div className="lighthouse">
          <div className="top"></div>
          <div className="light"></div>

          <div className="body"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingMain;
