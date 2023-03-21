import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const SLayout = styled.div`
  border: 1px solid black;
  z-index: 900;
  background-color: white;
  width: 90vw;
  height: 80vh;
  position: fixed;
  top: 15%;
  display: flex;
`;
const SContentDiv = styled.div`
  width: 40%;
  height: 100%;
  border: 1px solid black;
  background: #f5f6f7;
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
`;
const SImgDiv = styled.div`
  border: 1px solid black;
  width: 30%;
  height: 100%;
`;
const SDescDiv = styled.div`
  border: 1px solid black;
  width: 70%;
  height: 100%;
`;
type DataType = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  dataInfo: string | null | undefined;
};
export default function MapModal({ setOpenModal, dataInfo }: DataType) {
  return (
    <SLayout>
      <SContentDiv>
        <SItemDiv>
          <SImgDiv></SImgDiv>
          <SDescDiv></SDescDiv>
        </SItemDiv>
      </SContentDiv>
      <SMapDiv>adfsadsf</SMapDiv>
    </SLayout>
  );
}
