import React from "react";
import styled from "styled-components";
import UserBoard from "../../components/mytravel/UserBoard";
import UserScheduleList from "../../components/mytravel/UserScheduleList";
import Nonmember from "../../components/mytravel/Nonmember";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const SLayout = styled.div`
  margin-top: 20vh;
  width: 100%;
  height: 100vh;
`;

const MyTravel = () => {
  const user = useSelector((state: RootState) => state?.UserReducer?.user);
  return (
    <SLayout>
      {user?.[0]?._id ? (
        <>
          <UserBoard />
          <UserScheduleList />
        </>
      ) : (
        <Nonmember />
      )}
    </SLayout>
  );
};

export default MyTravel;
