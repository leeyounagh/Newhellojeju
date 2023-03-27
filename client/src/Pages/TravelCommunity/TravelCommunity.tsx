import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Board from "../../components/travelcommunity/Board";
import Slice from "../../components/travelcommunity/Slice";
import axios from "axios";
import { setCommunityList } from "../../slice/CommunityData";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  useEffect(() => {
    async function getList() {
      try {
        const response = await axios.get("/api/users/addcommunity/letter");
        const data = response.data.productInfo;

        dispatch(setCommunityList(data));
      } catch (error) {
        console.error(error);
      }
    }

    getList();
  }, []);

  return (
    <SLayout>
      <h1>Hello jeju Community</h1>
      <Slice />
      <Board />
    </SLayout>
  );
};

export default TravelCommunity;
