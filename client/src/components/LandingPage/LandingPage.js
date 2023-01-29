import React from "react";

import LandingTitle from "./util/LandingTitle";

import PageIntroduce from "./util/PageIntroduce";
import Slider from "./util/Slider";

const LandingPage = (props) => {
  const LandingFooterHandler = () => {
    if (props.user.userData) {
      return (
        <div>
          <Slider userdata={props.user.userData}></Slider>
        </div>
      );
    }
  };

  return (
    <div style={{ overflowX: "none" }}>
      <LandingTitle />

      <PageIntroduce></PageIntroduce>
      <LandingFooterHandler />
    </div>
  );
};

export default LandingPage;
