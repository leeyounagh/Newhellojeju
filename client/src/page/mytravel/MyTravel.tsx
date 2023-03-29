import React from "react";
import styled from "styled-components";
import UserBoard from "../../components/mytravel/UserBoard";
import UserScheduleList from "../../components/mytravel/UserScheduleList";

const SLayout = styled.div`
  margin-top: 20vh;
  width: 100%;
  height: 100vh;
`;

const MyTravel = () => {
  return (
    <SLayout>
      <UserBoard />
      <UserScheduleList />
    </SLayout>
  );
};

export default MyTravel;
