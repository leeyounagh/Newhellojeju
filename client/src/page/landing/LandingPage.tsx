import React from "react";
import LandingLogo from "../../components/landingpage/LandingLogo";
import PageIntroduce from "../../components/landingpage/PageIntroduce";
import Description from "../../components/landingpage/Description";

const LandingPage = () => {
  return (
    <>
      <LandingLogo />
      <Description />
      <PageIntroduce />
    </>
  );
};

export default LandingPage;
