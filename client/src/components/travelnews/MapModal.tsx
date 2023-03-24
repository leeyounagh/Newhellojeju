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
  z-index: 900;
  background-color: white;
  width: 90vw;
  height: 80vh;
  position: fixed;
  top: 10%;
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  font-style: normal;
`;
const SContentDiv = styled.div`
  width: 40%;
  height: 100%;
  background: #f5f6f7;
  overflow-y: scroll;
`;
const SMapDiv = styled.div`
  width: 60%;
  height: 100%;
`;
const SItemDiv = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  cursor: pointer;
  margin-bottom: 30px;
  padding: 10px;
`;
const SImgDiv = styled.div`
  width: 40%;
  height: 100%;
`;
const SDescDiv = styled.div`
  width: 60%;
  height: 100%;
`;
const SInnerLayout = styled.div`
  display: flex;
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
  const [markerClick, SetMarkerClick] = useState<boolean>(false);
  const [ImgClick, SetImgClick] = useState<boolean>(false);
  const dispatch = useDispatch();
  let filteredData = data.filter((item) => item[dataInfo])[0][dataInfo];

  useEffect(() => {
    dispatch(setMapData(filteredData));
  }, [dataInfo]);

  const handleClickedData = (item: ModalType) => {
    setSelectedData([item]);
    SetMarkerClick(true);
    SetImgClick(true);
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
        </SContentDiv>
        <SMapDiv>
          <Map
            selectedData={selectedData}
            setSelectedData={setSelectedData}
            markerClick={markerClick}
            SetMarkerClick={SetMarkerClick}
            ImgClick={ImgClick}
            SetImgClick={SetImgClick}
          />
        </SMapDiv>
      </SInnerLayout>
    </SLayout>
  );
}
