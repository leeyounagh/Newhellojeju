import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../store/store";
import Btn1 from "../button/Btn1";
import axios from "axios";

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
  min-height: 60vh;
`;
const SListDiv = styled.div`
  width: 100%;
  // height: 80%;
  padding: 30px 0 0 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  a {
    text-decoration: none;
    color: black;
  }
`;
const SCard = styled.div`
  width: 90%;
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
export type ScheduleType = {
  date: number;
  desc: string;
  endDate: string;
  id: string;
  startDate: string;
  style: string;
  title: string;
  writer: string;
};
export default function UserScheduleList() {
  const user = useSelector((state: RootState) => state?.UserReducer?.user);

  const removeHandler = async (id: string) => {
    try {
      const response = await axios.delete(
        `/api/users/removefromschedule?id=${id}`
      );
      const data = await response.data;
      console.log("data", data);
      if (data.success) {
        alert("스케쥴을 삭제했습니다.");
        window.location.reload();
      }
    } catch (err) {
      if (err) {
        alert("삭제에 실패했습니다.");
      }
    }
  };
  return (
    <SLayout>
      <SInnerDiv>
        <h1>나의 일정 리스트</h1>
        <SListDiv>
          {user[0]?.schedule ? (
            <>
              {user[0]?.schedule?.map((item: ScheduleType) => {
                return (
                  <SCard>
                    <STitleDiv>{item?.title}</STitleDiv>
                    <SItemDiv>
                      출발일:{item?.startDate.substring(0, 10)}
                    </SItemDiv>
                    <SItemDiv>
                      돌아가는날:{item?.endDate.substring(0, 10)}
                    </SItemDiv>
                    <Link to={`/mytravel/${item.id}`}>
                      <SItemDiv>자세히 보기...</SItemDiv>
                    </Link>

                    <SItemDiv>
                      <SBtnDiv
                        onClick={() => {
                          removeHandler(item.id);
                        }}
                      >
                        <Btn1 title="삭제" />
                      </SBtnDiv>
                    </SItemDiv>
                  </SCard>
                );
              })}
            </>
          ) : (
            "등록된 일정이 없습니다."
          )}
        </SListDiv>
      </SInnerDiv>
    </SLayout>
  );
}
