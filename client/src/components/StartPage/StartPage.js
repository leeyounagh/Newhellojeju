import React from "react";
import "./StartPage.scss";

const StartPage = () => {
  const cloudRenderer = () => {
    return Array.from({ length: 30 })
      .fill("☁️")
      .map((item) => {
        return (
          <>
            <i class="cloud">{item}</i>
          </>
        );
      });
  };

  return (
    <div className="Start_Style" style={{ positon: "absolute", left: "0px" }}>
      <div>
        <a
          className="start_title"
          href="/landing"
          style={{
            position: "absolute",
            zIndex: "50",
            left: "51%",
            top: "45%",
            width: "250px",
            height: "50px",
          }}
        ></a>
      </div>
      <div class="sky">
        <div className="container ">{cloudRenderer()}</div>
      </div>
      <p class="fly">
        <span class="plane">✈️</span>
      </p>

      <div class="sky high">
        <div class="container">{cloudRenderer()}</div>
      </div>
    </div>
  );
};

export default StartPage;
