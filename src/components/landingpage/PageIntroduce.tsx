import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Btn1 from "../button/Btn1";

const SLayout = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #89a6ae;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SItemDiv = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  justify-content: space-between;
`;
const SFirstCardDiv = styled.div`
  width: 20%;
  height: 100%;
  background: url(image/트래블스팟.jpg);
  background-size: 300px 600px;
  position: relative;
  .title1 {
    text-align: center;
    position: absolute;
    top: 80%;
    left: 30%;
  }
  .hover-text1 {
    background: #000000;
    opacity: 0;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
  }
  &:hover {
    .title1 {
      display: none;
    }
    .hover-text1 {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0.8;
      color: white;
      height: 100%;
      font-size: 18px;
      font-style: italic;
    }
    p {
      width: 80%;
    }
  }
`;
const SSecondCardDiv = styled.div`
  width: 20%;
  height: 100%;
  background: url(image/트래블뉴스.jpg);
  background-size: 300px 600px;
  position: relative;
  .title2 {
    text-align: center;
    position: absolute;
    top: 80%;
    left: 40%;
  }
  .hover-text2 {
    background: #000000;
    opacity: 0;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
  }
  &:hover {
    .title2 {
      display: none;
    }
    .hover-text2 {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0.8;
      color: white;
      height: 100%;
      font-size: 18px;
      font-style: italic;
    }
    p {
      width: 80%;
    }
  }
`;
const SThirdCardDiv = styled.div`
  width: 20%;
  height: 100%;
  background: url(image/커뮤니티.jpg);
  background-size: 300px 600px;
  position: relative;
  .title3 {
    text-align: center;
    position: absolute;
    top: 80%;
    left: 30%;
  }
  .hover-text3 {
    background: #000000;
    opacity: 0;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
  }
  &:hover {
    .title3 {
      display: none;
    }
    .hover-text3 {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0.8;
      color: white;
      height: 100%;
      font-size: 18px;
      font-style: italic;
    }
    p {
      width: 80%;
    }
  }
`;
const SFourthCardDiv = styled.div`
  width: 20%;
  height: 100%;
  background: url(image/마이트레블.jpg);
  background-size: 300px 600px;
  position: relative;
  .title4 {
    text-align: center;
    position: absolute;
    top: 80%;
    left: 30%;
  }
  .hover-text4 {
    background: #000000;
    opacity: 0;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
  }
  &:hover {
    .title4 {
      display: none;
    }
    .hover-text4 {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0.8;
      color: white;
      height: 100%;
      font-size: 18px;
      font-style: italic;
    }
    p {
      width: 80%;
    }
  }
`;
const SBtnDiv = styled.div`
  width: 50%;
  margin-top: 10px;
`;
const LandingIndroduce = () => {
  return (
    <SLayout>
      <SItemDiv>
        <SFirstCardDiv>
          <h2 className="title1">Travel Spot</h2>
          <div className="hover-text1">
            <p>
              제주도는 북쪽으로는 제주시, 남쪽에는 서귀포시로 나누어져 있습니다.
              각지역별 맛집,관광지,호텔,쇼핑스팟까지 한눈에 보며, 관심있는 곳은
              찜해두고 여행계획에 추가해보아요!
            </p>
            <SBtnDiv>
              <Link to="/travelspot">
                <Btn1 title="바로가기" />
              </Link>
            </SBtnDiv>
          </div>
        </SFirstCardDiv>
        <SSecondCardDiv>
          <h2 className="title2">News</h2>
          <div className="hover-text2">
            <p>
              에디터가 추천해주는 제주 스팟들과 Hello Jeju 추천
              관광지,맛집,쇼핑스팟,호텔을 지도와 함께 위치를 확인하며 계획에
              추가해보세요!
            </p>
            <SBtnDiv>
              <Link to="/travelnews">
                <Btn1 title="바로가기" />
              </Link>
            </SBtnDiv>
          </div>
        </SSecondCardDiv>
        <SThirdCardDiv>
          <h2 className="title3">Community</h2>
          <div className="hover-text3">
            <p>
              Hello Jeju 유저들과 제주여행 정보 공유하고, 서로 소통하며 더욱더
              Hello Jeju를 즐겨보세요!
            </p>
            <SBtnDiv>
              <Link to="/community">
                <Btn1 title="바로가기" />
              </Link>
            </SBtnDiv>
          </div>
        </SThirdCardDiv>
        <SFourthCardDiv>
          <h2 className="title4">My Travel</h2>
          <div className="hover-text4">
            <p>당신의 제주 여행 계획을 세워보세요!</p>
            <SBtnDiv>
              <Link to="/mytravel">
                <Btn1 title="바로가기" />
              </Link>
            </SBtnDiv>
          </div>
        </SFourthCardDiv>
      </SItemDiv>
    </SLayout>
  );
};

export default LandingIndroduce;
