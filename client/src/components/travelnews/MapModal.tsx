import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import Map from "./Map";
import { AiFillCloseCircle } from "react-icons/ai";
import { hotel } from "../../data/hotel";
import { shopping } from "../../data/shopping";
import { tour } from "../../data/spot";
import { restaurant } from "../../data/restaurant";
import { setMapData } from "../../slice/MapDataSlice";
import { useDispatch } from "react-redux";
import ModalType from "../../types/types";

const SLayout = styled.div`
  border: 1px solid black;
  z-index: 900;
  background-color: white;
  width: 90vw;
  height: 80vh;
  position: fixed;
  top: 10%;
`;
const SContentDiv = styled.div`
  width: 40%;
  height: 100%;
  border: 1px solid black;
  background: #f5f6f7;
  overflow-y: scroll;
`;
const SMapDiv = styled.div`
  border: 1px solid black;
  width: 60%;
  height: 100%;
`;
const SItemDiv = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 25%;
  display: flex;
  cursor: pointer;
`;
const SImgDiv = styled.div`
  border: 1px solid black;
  width: 40%;
  height: 100%;
`;
const SDescDiv = styled.div`
  border: 1px solid black;
  width: 60%;
  height: 100%;
`;
const SInnerLayout = styled.div`
  display: flex;
  border: 1px solid red;
  width: 100%;
  height: 90%;
`;
const SButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10%;
  padding-right: 20px;
`;
const SImg = styled.img`
  width: 100%;
  height: 100%;
`;
const STitleDiv = styled.div`
  font-size: 1.5rem;
  height: 30%;
  padding-left: 10px;
`;
const STagDiv = styled.div`
  padding-left: 10px;
`;
type DataType = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  dataInfo: "hotel" | "shopping" | "tour" | "restaurant";
};

export default function MapModal({ setOpenModal, dataInfo }: DataType) {
  const data = [{ hotel }, { shopping }, { tour }, { restaurant }];
  const [selectedData, setSelectedData] = useState<ModalType[]>([]);

  const dispatch = useDispatch();
  let filteredData = data.filter((item) => item[dataInfo])[0][dataInfo];

  useEffect(() => {
    dispatch(setMapData(filteredData));
  }, [dataInfo]);

  const handleClickedData = (item: ModalType) => {
    setSelectedData([item]);
    dispatch(setMapData([item]));
    // boolean값이랑 변수하나더 세팅해서 조건을 바꿔보자
  };
  return (
    <SLayout>
      <SButtonDiv>
        <AiFillCloseCircle
          style={{ cursor: "pointer" }}
          size={50}
          onClick={() => {
            setOpenModal(false);
          }}
        />
      </SButtonDiv>

      <SInnerLayout>
        <SContentDiv>
          {filteredData?.map((item) => {
            return (
              <>
                <SItemDiv
                  onClick={() => {
                    handleClickedData(item);
                  }}
                >
                  <SImgDiv>
                    <SImg src={item.imgpath} />
                  </SImgDiv>
                  <SDescDiv>
                    <STitleDiv>{item.title}</STitleDiv>
                    <STagDiv>{item.tag}</STagDiv>
                  </SDescDiv>
                </SItemDiv>
              </>
            );
          })}
        </SContentDiv>{" "}
        <SMapDiv>
          <Map selectedData={selectedData} setSelectedData={setSelectedData} />
        </SMapDiv>
      </SInnerLayout>
    </SLayout>
  );
}
