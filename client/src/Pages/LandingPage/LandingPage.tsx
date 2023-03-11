import React from "react";

import LandingLogo from "../../components/landingpage/LandingLogo";

import PageIntroduce from "../../components/landingpage/PageIntroduce";
import Description from "../../components/landingpage/Description";

const LandingPage = (props: any) => {
  return (
    <div>
      <LandingLogo />
      <Description />
      <PageIntroduce />
    </div>
  );
};

export default LandingPage;
