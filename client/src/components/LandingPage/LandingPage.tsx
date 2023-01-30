import React from "react";

import LandingTitle from "./util/LandingTitle";

import PageIntroduce from "./util/PageIntroduce";
import Slider from "./util/Slider";

const LandingPage = (props: any) => {
  return (
    <div>
      <LandingTitle />

      <PageIntroduce></PageIntroduce>
      {props.user.userData && props.user.userData.isAuth ? (
        <>
          <Slider />
        </>
      ) : null}
    </div>
  );
};

export default LandingPage;
