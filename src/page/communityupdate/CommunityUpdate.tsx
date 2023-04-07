import React, { useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import Btn1 from "../../components/button/Btn1";
import OnChangeEvent from "../../utils/OnChangeEvent";
import { RootState } from "../../store/store";
import { v4 } from "uuid";

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
  border: none;
  padding-left: 10px;
  &:focus {
    outline: #94b1b9;
  }
`;
const STextAreaDiv = styled.div`
  border: none;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
`;
const STextArea = styled.textarea`
  width: 80%;
  height: 100%;
  font-size: 1.5rem;
  padding: 10px 0 0 10px;
  border: none;
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
  const user = useSelector((state: RootState) => state.UserReducer.user);
  const [title, setTitle] = useState<{ title: string }>({ title: "" });
  const [desc, setDesc] = useState<{ desc: string }>({ desc: "" });
  const [images, setImages] = useState<string[]>([]);

  const onDropHandler = (files: File[], rejectedFiles: FileRejection[]) => {
    if (rejectedFiles.length > 0) {
      const invalidFileType = rejectedFiles[0].file.type;
      alert(`${invalidFileType} 파일 형식은 업로드가 불가능합니다.`);
      return;
    }
    let formData = new FormData();

    formData.append("file", files[0]);

    axios
      .post("/api/contents/image", formData, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((response) => {
        if (response.data.success) {
          setImages([...images, response.data.fileName]);
        } else {
          alert("파일을 저장하는데 실패했습니다.");
        }
      });
  };

  const onsubmitHandler = async () => {
    if (!title.title || !desc.desc) {
      return alert("모든값을 넣어주셔야됩니다.");
    }
    const body = {
      writer: user[0],
      Communutytitle: title.title,
      Communutydesc: desc.desc,
      images: images,
      id: v4(),
    };
    try {
      const response = await axios.post(`/api/users/addcommunity`, body);
      const data = await response.data;
      if (data.success === true) {
        alert("게시글 등록에 성공했습니다.");
        window.location.reload();
      }
    } catch (err) {
      if (err) {
        alert("게시글 등록에 실패했습니다.");
      }
    }
  };
  const deleteHandler = (image: string) => {
    const currentIndex = images.indexOf(image);
    let newImages = [...images];
    newImages.splice(currentIndex, 1);
    setImages(newImages);
  };
  return (
    <SLayout>
      <SItemDiv>
        <SUploadDiv>
          <STitleDiv>
            제목:
            <SInput
              name="title"
              value={title.title}
              onChange={(event) => {
                OnChangeEvent(
                  event.target.value,
                  event.target.name,
                  title.title,
                  setTitle
                );
              }}
            />
          </STitleDiv>
          <STextAreaDiv>
            <STextArea
              name="desc"
              placeholder="내용을 적어주세요..."
              onChange={(event) => {
                OnChangeEvent(
                  event.target.value,
                  event.target.name,
                  desc.desc,
                  setDesc
                );
              }}
            />
          </STextAreaDiv>
          <SSubmitDiv>
            <SBtnDiv onClick={() => onsubmitHandler()}>
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
                <SImgDiv key={index} onClick={() => deleteHandler(image)}>
                  {/* <SImg key={index} src={`http://localhost:5000/${image}`} /> */}
                  {/* <SImg key={index} src={`http://hellojeju.shop/${image}`} /> */}
                  {/* <SImg key={index} src={`http://43.201.26.114/${image}`} /> */}
                  <SImg
                    key={index}
                    src={`http://43.201.26.114/images/${image}`}
                  />
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
