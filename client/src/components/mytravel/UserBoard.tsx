import React from "react";
import styled from "styled-components";
import { AiFillSchedule } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";

const SUserInfoDiv = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
`;
const SUserBoardDiv = styled.div`
  border: 1px solid lightgray;
  width: 70%;
  height: 100%;
  background: #f2f3f5;
`;
const STitleDiv = styled.div`
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SBoardItemDiv = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
`;
const SDiv = styled.div`
  width: 50%;
  height: 100%;
  h3 {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border-bottom: 1px solid lightgray;
  }
`;
const SDescDiv = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
`;

export default function UserBoard() {
  return (
    <SUserInfoDiv>
      <SUserBoardDiv>
        <STitleDiv>
          <h1>이수연님의 제주여행</h1>
        </STitleDiv>
        <SBoardItemDiv>
          <SDiv>
            <h3>E-mail</h3>
            <SDescDiv>dudgk0216@naver.com</SDescDiv>
          </SDiv>
          <SDiv>
            <h3>나의 여정 등록</h3>
            <SDescDiv>
              <AiFillSchedule size={50} />
            </SDescDiv>
          </SDiv>
          <SDiv>
            <h3>찜리스트</h3>
            <SDescDiv>
              <BsHeartFill size={40} />
            </SDescDiv>
          </SDiv>
        </SBoardItemDiv>
      </SUserBoardDiv>
    </SUserInfoDiv>
  );
}
