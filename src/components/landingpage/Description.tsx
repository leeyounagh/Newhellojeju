import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../lotties/114285-animated-wallpaper-under-sea.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  resizeMode: "cover",
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Container = styled.section`
  width: 100vw;
  height: 90vh;
  background-color: #424563;
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;
const LottieContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Title = styled.div`
  font-size: 4rem;
  text-align: center;
  z-index: 15;
  position: absolute;
  top: 40%;
  left: 40%;
  font-weight: 900;
  animation-name: move;
  animation-duration: 2s;

  @keyframes move {
    0% {
      top: 0px;
    }
    20% {
      transform: rotate(30deg);
    }
    100% {
      top: 40%;
    }
  }
`;
const ItemText = styled.div`
  font-size: 4rem;
  text-align: center;
  z-index: 15;
  position: absolute;
  top: 50%;
  left: 25%;
  font-weight: 900;
  animation-name: textmove;
  animation-duration: 2s;
  @keyframes textmove {
    0% {
      top: 150px;
    }
    20% {
      transform: rotate(30deg);
    }
    100% {
      top: 50%;
    }
  }
`;

const Description = () => {
  const [showText, setShowtext] = useState<Boolean>(false);
  const [scroll, setscroll] = useState<Boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
  }, []);

  const scrollEvent = () => {
    if (window.scrollY >= 300) {
      setTimeout(() => {
        setShowtext(true);
      }, 1500);
      setscroll(true);
      window.removeEventListener("scroll", scrollEvent);
    }
  };
  return (
    <Container>
      <LottieContainer>
        <Lottie
          options={defaultOptions}
          height="100%"
          width="100%"
          style={{ zIndex: 10 }}
        />
        {scroll === true ? (
          <>
            {showText ? <Title>제주도여행,</Title> : null}{" "}
            <ItemText> HelloJeju와 함께 계획을 세워보아요.</ItemText>
          </>
        ) : null}
      </LottieContainer>
    </Container>
  );
};

export default Description;
