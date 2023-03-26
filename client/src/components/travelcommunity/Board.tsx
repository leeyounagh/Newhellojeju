import React from "react";
import styled from "styled-components";
import Btn1 from "../button/Btn1";

const SLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
const SInnerLayout = styled.div`
  border-top: 3px solid black;
  width: 80%;
  // height: 90vh;
  margin-bottom: 100px;
`;
const STitleDiv = styled.div`
  width: 100%;
  height: 10vh;
  border: 1px solid black;
  display: flex;
`;
const STitleItemDiv = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SNameDiv = styled.div`
  border: 1px solid black;
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SPostDiv = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 90vh;
  display: flex;
`;
const SPostTitleDiv = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 10%;
  padding-left: 100px;
  display: flex;
  align-items: center;
`;
const SPostNameDiv = styled.div`
  border: 1px solid black;
  width: 10%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SPostDateDiv = styled.div`
  border: 1px solid black;
  width: 10%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SPageNationDiv = styled.div`
  border: 1px solid black;
  height: 10vh;
`;
const SUploadButtonDiv = styled.div`
  width: 100%;
  height: 10vh;
  border: 1px solid black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const SBtnDiv = styled.div`
  width: 20%;
  height: 100%;
`;
export default function Board() {
  return (
    <SLayout>
      <SInnerLayout>
        <STitleDiv>
          <STitleItemDiv>글제목</STitleItemDiv>
          <SNameDiv>작성자</SNameDiv>
          <SNameDiv>날짜</SNameDiv>
        </STitleDiv>
        <SPostDiv>
          <SPostTitleDiv>adfads</SPostTitleDiv>
          <SPostNameDiv>adfadf</SPostNameDiv>
          <SPostDateDiv>adsfasd</SPostDateDiv>
        </SPostDiv>
        <SUploadButtonDiv>
          <SBtnDiv>
            <Btn1 title="게시물등록" />
          </SBtnDiv>
        </SUploadButtonDiv>
        <SPageNationDiv>페이지네이션</SPageNationDiv>
      </SInnerLayout>
    </SLayout>
  );
}
