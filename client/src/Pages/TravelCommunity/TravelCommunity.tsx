import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Board from "../../components/travelcommunity/Board";
import Slice from "../../components/travelcommunity/Slice";

const SLayout = styled.div`
  width: 100%;
`;

const TravelCommunity = () => {
  return (
    <SLayout>
      <Slice />
      <Board />
    </SLayout>
  );
};

export default TravelCommunity;
