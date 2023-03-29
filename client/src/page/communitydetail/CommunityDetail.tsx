import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PostType } from "../../types/types";
import Comment from "../../components/commutitydetail/Comment";

const SLayout = styled.div`
  width: 100%;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SItemDiv = styled.div`
  border: 1px solid lightgray;
  width: 80%;
  margin-bottom: 100px;
`;
const STitleDiv = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  align-items: center;
`;
const SWriterDiv = styled.div`
  border-top: 1px solid lightgray;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  font-size: 1.5rem;
`;
const SDescDiv = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  width: 100%;
  padding-bottom: 30px;
`;
const STextDiv = styled.div`
  font-size: 1.5rem;
  padding: 30px 30px 30px 30px;
  display: flex;
  justify-content: center;
`;
const SImgDiv = styled.div`
  // border: 1px solid black;
  padding: 30px 30px 30px 30px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const SImg = styled.img``;
const CommunityDetail = () => {
  const { productId } = useParams();
  const [listData, setListData] = useState<PostType[] | undefined>();

  // 제목작성자글사진코멘트 코멘트 등록
  useEffect(() => {
    getList();
    async function getList() {
      try {
        const response = await axios.get(
          `/api/users/addcommunity/letter/letter_by_id?contentsid=${productId}&type=single`
        );

        const data = await response.data;

        if (data.success) {
          setListData([data.product[0]]);
        }
      } catch (err) {
        if (err) {
          alert("게시글을 가져오는데 실패하였습니다.");
        }
      }
    }
  }, []);
  return (
    <SLayout>
      <SItemDiv>
        <STitleDiv>
          <h1> {listData?.[0]?.Communutytitle}</h1>
        </STitleDiv>
        <SWriterDiv>작성자: {listData?.[0]?.writer.name}</SWriterDiv>
        <SDescDiv>
          <STextDiv>{listData?.[0]?.Communutydesc}</STextDiv>
          <SImgDiv>
            {listData?.[0]?.images?.map((item: string) => {
              return (
                <>
                  <SImg src={`http://localhost:5000/${item}`} />;
                </>
              );
            })}
          </SImgDiv>
        </SDescDiv>
        <Comment listData={listData || undefined} />
      </SItemDiv>
    </SLayout>
  );
};

export default CommunityDetail;
