import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ScheduleType } from "../../components/mytravel/UserScheduleList";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const SLayout = styled.div`
  width: 100%;
  height: 90vh;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SDiv = styled.div`
  width: 80%;
  height: 80%;
  background: #daeaf1;
  border: 1px solid lightgray;
`;
const STitleDiv = styled.div`
  height: 20%;
  font-size: 1.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SDescDiv = styled.div`
  width: 100%;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SDateDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
`;
const MyscheduleDetail = () => {
  const { id } = useParams();
  const user = useSelector((state: RootState) => state?.UserReducer?.user);
  const [userSchedule, setUserSchedule] = useState<ScheduleType[]>([]);

  useEffect(() => {
    if (user && user[0].schedule) {
      const filteredSchedule = user[0].schedule.filter(
        (item: ScheduleType) => item.id === id
      );
      setUserSchedule(filteredSchedule);
    }
  }, [user, id]);

  return (
    <SLayout>
      <SDiv>
        <STitleDiv>{userSchedule?.[0]?.title}</STitleDiv>
        <SDateDiv>
          출발일: {userSchedule?.[0]?.startDate.substring(0, 10)} 돌아가는날:
          {userSchedule?.[0]?.endDate.substring(0, 10)}
        </SDateDiv>
        <SDescDiv>{userSchedule?.[0]?.desc}</SDescDiv>
      </SDiv>
    </SLayout>
  );
};

export default MyscheduleDetail;
