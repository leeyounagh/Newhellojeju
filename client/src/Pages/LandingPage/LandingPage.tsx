import React from "react";

import LandingLogo from "../../components/landingpage/LandingLogo";

import PageIntroduce from "../../components/landingpage/PageIntroduce";
import Slider from "../../util/Slider";
import Description from "../../components/landingpage/Description";

const LandingPage = (props: any) => {
  return (
    <div>
      <LandingLogo />
      <Description />
      <PageIntroduce />
      {/* {props.user.userData && props.user.userData.isAuth ? (
        <>
          <Slider />
        </>
      ) : null} */}
    </div>
  );
};

export default LandingPage;
