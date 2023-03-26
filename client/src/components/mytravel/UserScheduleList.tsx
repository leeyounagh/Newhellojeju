import React from "react";
import styled from "styled-components";

const SLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  h1 {
    border-bottom: 1px solid lightgray;
    height: 20%;
    padding: 30px 0 0 30px;
  }
`;
const SInnerDiv = styled.div`
  border: 1px solid lightgray;
  width: 70%;
  height: 60vh;
`;
const SListDiv = styled.div`
  width: 100%;
  height: 80%;
  padding: 30px 0 0 30px;
`;

export default function UserScheduleList() {
  return (
    <SLayout>
      <SInnerDiv>
        <h1>나의 일정 리스트</h1>
        <SListDiv>등록된 일정이 없습니다.</SListDiv>
      </SInnerDiv>
    </SLayout>
  );
}
