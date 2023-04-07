import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: grid;
  place-items: center;

  background: rgb(2, 0, 36);
  background-image: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  position: relative;
  overflow: hidden;
  a {
    z-index: 10;
  }
`;
const Title = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 900;
  position: absolute;
  top: 48vh;
  left: 44vw;
  width: 13ch;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;

  font-size: 2.5em;

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
const Sky = styled.div`
  position: absolute;
  top: -100vh;
  left: -10px;
  width: 100vw;
  height: 200vh;
  animation: ttb 12s infinite linear;

  & > .container {
    position: absolute;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  &.high {
    top: -400vh;
    height: 400vh;
    animation-duration: 17s;
    & > .container {
      transform: scale(1.5) rotateY(180deg);
    }
  }

  .cloud {
    position: absolute;
    &:nth-child(1n) {
      transform: scale(4);
      left: 40%;
      top: 5%;
      opacity: 0.9;
    }
    &:nth-child(2n) {
      transform: scale(5);
      opacity: 0.3;
    }
    &:nth-child(3n) {
      transform: scale(7) rotateY(180deg);
      left: 80%;
      top: 10%;
    }
    &:nth-child(4n) {
      transform: scale(4) rotateY(180deg);
      left: 60%;
      top: 20%;
    }
    &:nth-child(5n) {
      transform: scale(4);
      left: 20%;
      top: 30%;
    }
    &:nth-child(7n) {
      transform: scale(15) rotateY(180deg);
      left: 30%;
      top: 40%;
    }
    &:nth-child(10n) {
      transform: scale(10);
      left: 5%;
      top: 50%;
    }
    &:nth-child(11n) {
      transform: scale(3.5);
      left: 55%;
      top: 45%;
    }
    &:nth-child(11n) {
      transform: scale(3.5);
      left: 70%;
      top: 70%;
    }
    &:nth-child(13n) {
      transform: scale(5);
      left: 95%;
      top: 5%;
    }
    &:nth-child(17n) {
      transform: scale(8) rotateY(180deg);
      left: 15%;
      top: 65%;
    }
    &:nth-child(23n) {
      transform: scale(4) rotateY(180deg);
      left: 85%;
      top: 75%;
    }
    &:nth-child(27n) {
      transform: scale(6);
      left: 55%;
      top: 95%;
    }
  }
  @keyframes ttb {
    0% {
      transform: translate3d(0, -100%, 0) rotateY();
    }
    100% {
      transform: translate3d(0, 150%, 0);
    }
  }
`;
const Fly = styled.p`
  font-size: 10rem;
  margin: auto;
  justify-content: center;
  align-items: flex-end;
  .plane {
    display: block;
    transform: rotate(-45deg);
    display: flex;
  }
`;

const StartPage = () => {
  const cloudRenderer = () => {
    return Array.from({ length: 60 })
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
    <Container>
      <a href="/landing">
        <Title>Let's go Jeju...!</Title>
      </a>

      <Sky>
        <div className="container">{cloudRenderer()}</div>
      </Sky>
      <Fly>
        <span className="plane">✈️</span>
      </Fly>

      <Sky className="high">
        <div className="container">{cloudRenderer()}</div>
      </Sky>
    </Container>
  );
};

export default StartPage;
