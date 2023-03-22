import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Map from "./Map";
import { AiFillCloseCircle } from "react-icons/ai";

const SLayout = styled.div`
  border: 1px solid black;
  z-index: 900;
  background-color: white;
  width: 90vw;
  height: 80vh;
  position: fixed;
  top: 15%;
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
  cursor: pointer;
`;
type DataType = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  dataInfo: string | null | undefined;
};
export default function MapModal({ setOpenModal, dataInfo }: DataType) {
  return (
    <SLayout>
      <SButtonDiv>
        <AiFillCloseCircle
          size={50}
          onClick={() => {
            setOpenModal(false);
          }}
        />
      </SButtonDiv>

      <SInnerLayout>
        <SContentDiv>
          <SItemDiv>
            <SImgDiv></SImgDiv>
            <SDescDiv></SDescDiv>
          </SItemDiv>
        </SContentDiv>{" "}
        <SMapDiv>
          <Map dataInfo={dataInfo} />
        </SMapDiv>
      </SInnerLayout>
    </SLayout>
  );
}
