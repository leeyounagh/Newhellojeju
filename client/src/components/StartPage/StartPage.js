import React from "react";
import { Link } from "react-router-dom";
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
    <div className="Start_Style">
      <div>
        <Link to="/landing" className="start_title"></Link>
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
