import axios from "axios";
import React, { useEffect, useState, Suspense } from "react";
import styled from "styled-components";
import Filters from "../../components/travelspot/Filters";
import Search from "../../components/travelspot/Search";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import TopBtn from "../../components/button/TopBtn";
const Card = React.lazy(() => import("../../components/travelspot/Card"));

const { REACT_APP_VisitJeju_KEY } = process.env;

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

interface ItemType {
  [x: string]: any;

  item: {
    region1cd: {
      label: string;
    };
  };
}
const NorthHotSpotPage = () => {
  const contentId = useSelector(
    (state: RootState) => state.ContentReducer.content
  );
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [northData, setNorthData] = useState<any[]>([]);
  const mainUrl = `http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${REACT_APP_VisitJeju_KEY}&locale=kr&category=${contentId}&page=${page}`;

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${mainUrl}`);
        const data = await response.data.items;

        setNorthData(
          data.filter((item: ItemType) => item?.region1cd?.label === "서귀포시")
        );
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [contentId, mainUrl]);

  //제주시
  return (
    <SLayout>
      <h1>서귀포시</h1>
      <SFilterDiv>
        <SInnerDiv>
          <Search />
          <Filters />
        </SInnerDiv>
      </SFilterDiv>
      <Suspense fallback={<div>Loading...</div>}>
        <Card
          data={northData}
          setData={setNorthData}
          page={page}
          setPage={setPage}
          isLastPage={isLastPage}
          setIsLastPage={setIsLastPage}
        />
      </Suspense>
      <TopBtn />
    </SLayout>
  );
};

export default React.memo(NorthHotSpotPage);
