import React, { useState, MouseEvent, useEffect } from "react";
import styled from "styled-components";
import MapModal from "./MapModal";

const SLayout = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  margin-top: 100px;
`;
const SItemDiv = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    padding-left: 20px;
    margin-bottom: 20px;
    height: 10%;
    display: flex;
    justify-content: flex-start;
    width: 80%;
  }
`;
const SImg = styled.img`
  width: 100%;
  height: 70%;
`;
const SInnderDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
const Recomendation = () => {
  // 클릭시 해당데이터셋 넘버에 해당하는 맵과 데이터가 나와야됨
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [dataInfo, setDataInfo] = useState<string | null>();
  // 맵은 true일경우 모달이나옴

  console.log(dataInfo, openModal);
  useEffect(() => {
    const html = document.documentElement;
    if (openModal) {
      html.style.overflowY = "hidden";
      html.style.overflowX = "hidden";
    } else {
      html.style.overflowY = "auto";
      html.style.overflowX = "auto";
    }
    return () => {
      html.style.overflowY = "auto";
      html.style.overflowX = "auto";
    };
  }, [openModal]);

  const handleModal = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLDivElement;
    setOpenModal(true);
    setDataInfo(target?.dataset?.id);
  };

  return (
    <SLayout>
      <SInnderDiv>
        <SItemDiv onClick={handleModal} data-id="hotel">
          <h2>#Hotel</h2>
          <SImg src="image/hotel.png" />
        </SItemDiv>
        <SItemDiv onClick={handleModal} data-id="shopping">
          <h2>#Shopping</h2>
          <SImg src="image/쇼핑.png" />
        </SItemDiv>
        <SItemDiv onClick={handleModal} data-id="restaurant">
          <h2>#Restaurant</h2>
          <SImg src="image/restaurant.png" />
        </SItemDiv>
        <SItemDiv onClick={handleModal} data-id="tour">
          <h2>#Tour</h2>
          <SImg src="image/beach.png" />
        </SItemDiv>
      </SInnderDiv>
      {/* <MapModal setOpenModal={setOpenModal} dataInfo={dataInfo} /> */}
      {openModal ? (
        <MapModal setOpenModal={setOpenModal} dataInfo={dataInfo} />
      ) : null}
    </SLayout>
  );
};

export default React.forwardRef(Recomendation);
