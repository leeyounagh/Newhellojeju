import React, { useState } from "react";
import styled from "styled-components";
import Btn1 from "../button/Btn1";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PostType } from "../../types/types";

const SLayout = styled.div`
  width: 100%;
`;
const SInputDiv = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid lightgray;
`;
const SInput = styled.input`
  width: 80%;
  height: 40%;
  font-size: 1.5rem;
  margin-right: 10px;
  padding-left: 20px;
  border: none;
`;
const STitleDiv = styled.div`
  width: 100%;
  height: 7vh;
  border-bottom: 1px solid lightgray;
  font-size: 1.5rem;
  padding: 20px 20px 20px 20px;
`;
const SBtnDiv = styled.div`
  width: 15%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SItemDiv = styled.div`
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 10vh;
  display: flex;
`;
const SCommentDiv = styled.div`
  width: 80%;
  height: 100%;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SWriterDiv = styled.div`
  font-size: 1.5rem;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface DataType {
  listData?: PostType[];
}
interface CommentType {
  comment: string;
  writer: string;
}
export default function Comment({ listData }: DataType = {}) {
  //  DataType = {} 이유는 undifiend일때도 받을수 있게끔함
  const user = useSelector((state: RootState) => state.UserReducer.user);
  const [comment, setComment] = useState<string>("");
  const { productId } = useParams();

  // 제목작성자글사진코멘트 코멘트 등록
  let commentList = listData?.[0].comment;
  const handleUploadComment = async () => {
    const body = {
      writer: user[0].name,
      comment: comment,
    };
    try {
      const response = await axios.post(
        `/api/users/addcommunity/letter/comment?contentsid=${productId}`,
        body
      );
      const data = await response.data;
      if (data.success) {
        alert("댓글이 등록 되었습니다.");
        window.location.reload();
      }
    } catch (err) {
      if (err) {
        alert("댓글 작성에 실패 했습니다.");
      }
    }
  };
  return (
    <SLayout>
      <STitleDiv>Comment </STitleDiv>
      <SInputDiv>
        <SInput
          placeholder="댓글을 적어주세요"
          onChange={(event) => setComment(event.target.value)}
        />
        <SBtnDiv onClick={handleUploadComment}>
          <Btn1 title="댓글 등록" />
        </SBtnDiv>
      </SInputDiv>
      {commentList?.map((item: CommentType) => {
        return (
          <SItemDiv>
            <SCommentDiv>{item.comment}</SCommentDiv>
            <SWriterDiv>작성자:{item.writer} </SWriterDiv>
          </SItemDiv>
        );
      })}
    </SLayout>
  );
}
