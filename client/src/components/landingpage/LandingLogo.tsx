import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../lotties/23936-lighthouse.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const SLayout = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #89a6ae;
`;

const Logo = styled.article`
  margin: 0;
  color: #fae8e0;
  font-weight: 900;
  font-size: 80px;
  overflow-x: none;
  text-align: center;
  font-size: 100px;
`;
const SLogoDiv = styled.div`
  width: 50%;
  height: 60%;
`;
const LandingLogo = () => {
  return (
    <SLayout>
      <SLogoDiv>
        <Logo>HelloJeju</Logo>
        <Logo>
          <Lottie options={defaultOptions} height={500} width={500} />
        </Logo>
      </SLogoDiv>
    </SLayout>
  );
};

export default LandingLogo;
