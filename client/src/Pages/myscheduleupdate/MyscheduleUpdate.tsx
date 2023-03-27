import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Btn1 from "../../components/button/Btn1";

const SLayout = styled.div`
  margin-top: 100px;
  border: 1px solid black;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SBoardDiv = styled.div`
  border: 1px solid lightgray;
  width: 80%;
  height: 90%;
  background: #daeaf1;
`;
const SCalendatDiv = styled.div`
  border: 1px solid black;
  width: 40%;
  height: 80%;
  margin-right: 50px;
`;
const SUpdateDiv = styled.div`
  width: 40%;
  height: 80%;
`;
const STitleDiv = styled.div`
  width: 100%;
  height: 10%;
  padding-left: 30px;
  font-size: 1.3rem;
`;
const SInput = styled.input`
  width: 70%;
  height: 100%;
  margin-left: 50px;
  font-size: 1.3rem;
`;
const STextAreaDiv = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 30px;
`;
const STextArea = styled.textarea`
  width: 100%;
  height: 100%;
`;
const SBtnDiv = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SSubmitDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
`;
const SItemDiv = styled.div`
  width: 100%;
  height: 85%;
  background: #daeaf1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyscheduleUpdate = () => {
  return (
    <SLayout>
      <SBoardDiv>
        <SItemDiv>
          <SCalendatDiv></SCalendatDiv>
          <SUpdateDiv>
            <STitleDiv>
              제목:
              <SInput />
            </STitleDiv>
            <STextAreaDiv>
              <STextArea />
            </STextAreaDiv>
          </SUpdateDiv>
        </SItemDiv>

        <SSubmitDiv>
          <SBtnDiv>
            <Btn1 title="등록하기" />
          </SBtnDiv>
        </SSubmitDiv>
      </SBoardDiv>
    </SLayout>
  );
};

export default MyscheduleUpdate;
