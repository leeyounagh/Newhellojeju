import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

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
const SCard = styled.div``;

export default function UserScheduleList() {
  const user = useSelector((state: RootState) => state?.UserReducer?.user);
  return (
    <SLayout>
      <SInnerDiv>
        <h1>나의 일정 리스트</h1>
        <SListDiv></SListDiv>
        {/* <SListDiv>등록된 일정이 없습니다.</SListDiv> */}
      </SInnerDiv>
    </SLayout>
  );
}
