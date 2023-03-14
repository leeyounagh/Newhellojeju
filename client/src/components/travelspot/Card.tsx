import React from "react";
import styled from "styled-components";

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
  return (
    <SLayout>
      <SInnerDiv>
        {data?.map((item) => {
          return (
            <>
              {" "}
              <SItemDiv>
                <img
                  src={item?.repPhoto?.photoid?.thumbnailpath}
                  width="100%"
                  height="60%"
                />
                <h3>{item?.title}</h3>
                <h4>{item?.tag?.split(",", 4).join(" , ")}</h4>
              </SItemDiv>
            </>
          );
        })}
      </SInnerDiv>
    </SLayout>
  );
};

export default Card;
