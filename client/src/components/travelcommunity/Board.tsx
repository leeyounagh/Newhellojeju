import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Btn1 from "../button/Btn1";
import { RootState } from "../../store/store";
import Pagination from "../../utils/PageNation";
import { Link, useNavigate } from "react-router-dom";

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
  a {
    text-decoration: none;
    color: black;
  }
`;
const SPostTitleDiv = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 100%;
  padding-left: 100px;
  display: flex;
  align-items: center;
`;
const SPostNameDiv = styled.div`
  border: 1px solid black;
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SPostDateDiv = styled.div`
  border: 1px solid black;
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SPageNationDiv = styled.div`
  height: 10vh;
`;
const SUploadButtonDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-end;
`;
const SBtnDiv = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const SItemDiv = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 10%;
  display: flex;
`;
export default function Board() {
  const list = useSelector((state: RootState) => state?.CommunityReducer?.list);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const offset = (page - 1) * limit; //페이지 처음시작하는 인덱스번호
  const navigate = useNavigate();

  // 10씩 자르면됨
  return (
    <SLayout>
      <SInnerLayout>
        <STitleDiv>
          <STitleItemDiv>글제목</STitleItemDiv>
          <SNameDiv>작성자</SNameDiv>
          <SNameDiv>날짜</SNameDiv>
        </STitleDiv>
        <SPostDiv>
          {list.slice(offset, offset + limit).map((item: any) => {
            return (
              <Link to={`/community/${item._id}`}>
                <SItemDiv>
                  <SPostTitleDiv>{item?.Communutytitle}</SPostTitleDiv>

                  <SPostNameDiv>{item.writer.name}</SPostNameDiv>
                  <SPostDateDiv>2022-12-31</SPostDateDiv>
                </SItemDiv>
              </Link>
            );
          })}
        </SPostDiv>

        <SUploadButtonDiv>
          <SBtnDiv
            onClick={() => {
              navigate("/communityupdate");
            }}
          >
            <Btn1 title="게시물등록" />
          </SBtnDiv>
        </SUploadButtonDiv>

        <SPageNationDiv>
          <Pagination
            total={list?.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </SPageNationDiv>
      </SInnerLayout>
    </SLayout>
  );
}
