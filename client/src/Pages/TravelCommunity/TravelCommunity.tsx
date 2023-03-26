import React from "react";
import styled from "styled-components";
import Board from "../../components/travelcommunity/Board";
import Slice from "../../components/travelcommunity/Slice";

const SLayout = styled.div`
  width: 100%;
  h1 {
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    font-size: 2.5rem;
  }
`;

const TravelCommunity = () => {
  return (
    <SLayout>
      <h1>Hello jeju Community</h1>
      <Slice />
      <Board />
    </SLayout>
  );
};

export default TravelCommunity;
