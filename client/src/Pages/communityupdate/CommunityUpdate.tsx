import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import styled from "styled-components";
import axios from "axios";
import Btn1 from "../../components/button/Btn1";

const SLayout = styled.div`
  width: 100%;
  height: 90vh;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SItemDiv = styled.div`
  width: 80%;
  height: 90%;
  position: relative;
`;
const SBackgroundDiv = styled.div`
  width: 100%;
  height: 80%;
  z-index: 10;
  background: white;
  position: absolute;
  top: 10%;
  left: 0%;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
`;
const SUploadDiv = styled.div`
  width: 60%;
  height: 100%;
  position: absolute;
  z-index: 50;
  background: #ebf5ff;
  border-radius: 15px;
`;
const SImageDiv = styled.div`
  width: 20%;
  height: 50%;
  position: absolute;
  top: 20%;
  left: 70%;
  z-index: 50;
  opacity: 0.8;
  overflow-y: auto;
`;
const SImg = styled.img`
  width: 100%;
  height: 80%;
`;
const SDropzoneDiv = styled.div`
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;
const STitleDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
const SInput = styled.input`
  width: 70%;
  height: 40%;
  margin-left: 20px;
  font-size: 1.5rem;
`;
const STextAreaDiv = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
`;
const STextArea = styled.textarea`
  width: 80%;
  height: 100%;
  font-size: 1.5rem;
`;
const SImgDiv = styled.div``;
const SSubmitDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SBtnDiv = styled.div`
  width: 60%;
  height: 50%;
`;
const CommunityUpdate = () => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const dispatch = useDispatch();

  const onDropHandler = (files: any) => {
    let formData = new FormData();

    formData.append("file", files[0]);
    axios
      .post("/api/contents/image", formData, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((response) => {
        if (response.data.success) {
          console.log(response.data);
          setImages([...images, response.data.fileName]);
        } else {
          alert("파일을 저장하는데 실패했습니다.");
        }
      });
  };

  return (
    <SLayout>
      <SItemDiv>
        <SUploadDiv>
          <STitleDiv>
            제목:
            <SInput />
          </STitleDiv>
          <STextAreaDiv>
            <STextArea />
          </STextAreaDiv>
          <SSubmitDiv>
            <SBtnDiv>
              <Btn1 title="등록" />
            </SBtnDiv>
          </SSubmitDiv>
        </SUploadDiv>

        <SImageDiv>
          <SDropzoneDiv>
            <Dropzone onDrop={onDropHandler}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <h3>사진 업로드시 클릭!</h3>
                </div>
              )}
            </Dropzone>
          </SDropzoneDiv>
          {images.length > 0 ? (
            images.map((image, index) => {
              return (
                <SImgDiv key={index}>
                  <SImg key={index} src={`http://localhost:5000/${image}`} />
                </SImgDiv>
              );
            })
          ) : (
            <SImg
              alt="돌하르방"
              src="https://pbs.twimg.com/media/EZ9pBFwU8AAKM6q.jpg"
            ></SImg>
          )}
        </SImageDiv>
        <SBackgroundDiv />
      </SItemDiv>
    </SLayout>
  );
};

export default CommunityUpdate;
