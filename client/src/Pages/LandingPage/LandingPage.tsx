import React from "react";

import LandingLogo from "./util/LandingTitle";

import PageIntroduce from "./util/PageIntroduce";
import Slider from "./util/Slider";
import Description from "./util/Description";

const LandingPage = (props: any) => {
  return (
    <div>
      <LandingLogo />
      <Description />
      {/* <PageIntroduce /> */}
      {/* {props.user.userData && props.user.userData.isAuth ? (
        <>
          <Slider />
        </>
      ) : null} */}
    </div>
  );
};

export default LandingPage;
