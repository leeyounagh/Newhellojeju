import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import useDebounce from "../../utils/useDebounce";
import { Link } from "react-router-dom";

const SLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SItemDiv = styled.div`
  width: 20%;
  height: 400px;
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
}
const Card = ({ data }: DataType) => {
  const searchText = useSelector(
    (state: RootState) => state.SearchDataSlice.searchText
  );

  const debouncedValue = useDebounce<string>(searchText, 500);
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
          .map((item) => {
            return (
              <>
                <SItemDiv>
                  <Link to={`/travelspot/${item?.contentsid}`}>
                    <img
                      src={item?.repPhoto?.photoid?.thumbnailpath}
                      width="100%"
                      height="60%"
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
      <SInnerDiv>{dataRenderer()}</SInnerDiv>
    </SLayout>
  );
};

export default Card;
