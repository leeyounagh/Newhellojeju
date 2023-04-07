import React from "react";
import { useNavigate } from "react-router-dom";
import animationData from "../../lotties/82445-travelers-walking-using-travelrmap-application.json";
import Lottie from "react-lottie";
import styled from "styled-components";
import Btn1 from "../button/Btn1";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const SLayout = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SLottieDiv = styled.div`
  width: 100%;
  height: 60%;
  margin-bottom: 100px;
`;
const SDiv = styled.div`
  width: 40%;
  height: 100%;
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }
`;
const SLoginDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
`;
const SBtnDiv = styled.div`
  width: 50%;
  height: 100%;
`;
export default function Nonmember() {
  const navigate = useNavigate();
  return (
    <SLayout>
      <SDiv>
        <SLottieDiv>
          <Lottie options={defaultOptions} height={400} width="100%" />
        </SLottieDiv>
        <h1>로그인하고 HelloJeju와 함께 계획 세워요!</h1>
        <SLoginDiv>
          <SBtnDiv
            onClick={() => {
              navigate("/login");
            }}
          >
            <Btn1 title="Login" />
          </SBtnDiv>
        </SLoginDiv>
      </SDiv>
    </SLayout>
  );
}
