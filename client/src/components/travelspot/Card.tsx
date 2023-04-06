import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import useDebounce from "../../utils/useDebounce";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const SLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 100px;
  font-size: 1.2rem;
`;

const SItemDiv = styled.div`
  width: 360px;
  height: 500px;
  margin-right: 50px;
  text-align: center;
  margin-bottom: 50px;
  border: 1px solid lightgray;
  h3 {
    margin-top: 10px;
  }
  h4 {
    margin-top: 30px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
const SInnerDiv = styled.div`
  padding-left: 50px;
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 100px;
`;
interface DataType {
  data: String[] | any[];
  setData: Dispatch<SetStateAction<any>>;
  page: number;
  setPage: Dispatch<SetStateAction<any>>;
  isLastPage: boolean;
  setIsLastPage: Dispatch<SetStateAction<boolean>>;
}
interface ItemType {
  [x: string]: any;

  item: {
    region1cd: {
      label: string;
    };
  };
}
const Card = ({
  data,
  setData,
  page,
  setPage,
  isLastPage,
  setIsLastPage,
}: DataType) => {
  const searchText = useSelector(
    (state: RootState) => state.SearchDataReducer.searchText
  );

  const debouncedValue = useDebounce<string>(searchText, 500);

  const nextData = () => {
    if (page === 12) {
      setIsLastPage(true);
    }

    setPage(page + 1);
    let newData = data.filter(
      (item: ItemType) => item?.region1cd?.label === "서귀포시"
    );
    setData([...data, ...newData]);
  };

  const dataRenderer = () => {
    return (
      <>
        {data
          ?.filter((val) => {
            if (searchText == "") {
              return val;
            } else if (
              val?.title?.toLowerCase().includes(searchText?.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item, index) => {
            return (
              <>
                <SItemDiv key={index}>
                  <Link to={`/travelspot/${item?.contentsid}`}>
                    <img
                      src={item?.repPhoto?.photoid?.thumbnailpath}
                      width="100%"
                      height="320px"
                    />

                    <h3>{item?.title}</h3>
                    <h4>{item?.tag?.split(",", 4).join(" , ")}</h4>
                  </Link>
                </SItemDiv>
              </>
            );
          })}
      </>
    );
  };

  useEffect(() => {
    dataRenderer();
  }, [debouncedValue]);
  return (
    <SLayout>
      <InfiniteScroll
        dataLength={data.length < 10 ? 100 : data.length}
        hasMore={!isLastPage}
        next={nextData}
        loader={<div>로딩중</div>}
      >
        <SInnerDiv>{dataRenderer()}</SInnerDiv>
      </InfiniteScroll>
    </SLayout>
  );
};

export default Card;
