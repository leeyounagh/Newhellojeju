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
  font-size: 1.2rem;
`;
const SInnerLayout = styled.div`
  width: 80%;
  margin-bottom: 100px;
`;
const STitleDiv = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  border-bottom: 1px solid lightgray;
`;
const STitleItemDiv = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SNameDiv = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SPostDiv = styled.div`
  width: 100%;
  height: 90vh;
  a {
    text-decoration: none;
    color: black;
  }
`;
const SPostTitleDiv = styled.div`
  width: 80%;
  height: 100%;
  padding-left: 100px;
  display: flex;
  align-items: center;
`;
const SPostNameDiv = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SPostDateDiv = styled.div`
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
  width: 100%;
  height: 10%;
  display: flex;
  border-bottom: 1px solid lightgray;
`;
export interface ListType {
  Communutydesc: string;
  Communutytitle: string;
  comment: [
    {
      comment: string;
      date: number;
      writer: string;
    }
  ];
  images: string[];
  writer: {
    name: string;
    _id: string;
  };
  _v: number;
  _id: string;
  updatedAt: string;
}

export default function Board() {
  const list = useSelector((state: RootState) => state?.CommunityReducer?.list);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const offset = (page - 1) * limit; //페이지 처음시작하는 인덱스번호
  const navigate = useNavigate();
  console.log(list);

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
          {list.slice(offset, offset + limit).map((item: ListType) => {
            return (
              <Link to={`/community/${item._id}`}>
                <SItemDiv>
                  <SPostTitleDiv>{item?.Communutytitle}</SPostTitleDiv>

                  <SPostNameDiv>{item.writer.name}</SPostNameDiv>
                  <SPostDateDiv>
                    {item?.updatedAt.substring(0, 10)}
                  </SPostDateDiv>
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
