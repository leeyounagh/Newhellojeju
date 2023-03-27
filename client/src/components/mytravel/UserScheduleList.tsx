import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";
import Btn1 from "../button/Btn1";

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
const SCard = styled.div`
  width: 30%;
  height: 40vh;
  border: 1px solid lightgray;
  margin: 20px 20px 20px 20px;
`;
const STitleDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
const SItemDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const SBtnDiv = styled.div`
  width: 50%;
  height: 100%;
`;

export default function UserScheduleList() {
  const user = useSelector((state: RootState) => state?.UserReducer?.user);
  return (
    <SLayout>
      <SInnerDiv>
        <h1>나의 일정 리스트</h1>
        <SListDiv>
          {user[0]?.schedule ? (
            <SCard>
              {user[0]?.schedule?.map((item: any) => {
                return (
                  <>
                    <STitleDiv>{item?.title}</STitleDiv>
                    <SItemDiv>
                      출발일:{item?.startDate.substring(0, 10)}
                    </SItemDiv>
                    <SItemDiv>
                      돌아가는날:{item?.endDate.substring(0, 10)}
                    </SItemDiv>
                    <SItemDiv>자세히 보기...</SItemDiv>
                    <SItemDiv>
                      <SBtnDiv>
                        <Btn1 title="삭제" />
                      </SBtnDiv>
                    </SItemDiv>
                  </>
                );
              })}
            </SCard>
          ) : (
            "등록된 일정이 없습니다."
          )}
        </SListDiv>
      </SInnerDiv>
    </SLayout>
  );
}
