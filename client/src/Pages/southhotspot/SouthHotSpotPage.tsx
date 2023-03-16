import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Filters from "../../components/travelspot/Filters";
import Search from "../../components/travelspot/Search";
import Card from "../../components/travelspot/Card";

const { REACT_APP_VisitJeju_KEY } = process.env;

const mainUrl = `http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${REACT_APP_VisitJeju_KEY}&locale=kr`;

const SLayout = styled.div`
  width: 100vw;

  margin-top: 100px;

  vertical-align: text-bottom;
  h1 {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 200px;
    font-size: 50px;
    margin-bottom: 30px;
  }
`;
const SFilterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const SInnerDiv = styled.div`
  border: 1px solid lightgray;
  background: #f2f4f6;
  border-radius: 5px;
  width: 80%;
  padding-top: 30px;
`;
const SouthHotSpotPage = () => {
  const [southData, setSouthData] = useState<String[]>([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${mainUrl}`);
      const data = await response.data;
      setSouthData(data);
    }
    getData();
    console.log(southData);
  }, []);

  //  서귀포시
  return (
    <SLayout>
      <h1>서귀포시</h1>
      <SFilterDiv>
        <SInnerDiv>
          <Search />
          <Filters />
        </SInnerDiv>
      </SFilterDiv>
      <Card data={southData} />
    </SLayout>
  );
};

export default React.memo(SouthHotSpotPage);
