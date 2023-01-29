import React from "react";
import { Link } from "react-router-dom";
import "./StartPage.scss";

const StartPage = () => {
  const cloudRenderer = () => {
    return Array.from({ length: 30 })
      .fill("☁️")
      .map((item: any) => {
        return (
          <>
            <i className="cloud">{item}</i>
          </>
        );
      });
  };

  return (
    <div className="Start_Style">
      <div>
        <Link to="/landing" className="start_title"></Link>
      </div>
      <div className="sky">
        <div className="container ">{cloudRenderer()}</div>
      </div>
      <p className="fly">
        <span className="plane">✈️</span>
      </p>

      <div className="sky high">
        <div className="container">{cloudRenderer()}</div>
      </div>
    </div>
  );
};

export default StartPage;
