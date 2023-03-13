import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import axios from "axios";

const CommunityUpdate = (props: any) => {
  const [title, SetTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const [images, SetImages] = useState<any[]>([]);

  console.log(images);
  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetTitle(event.currentTarget.value);
  };
  const textareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(event.currentTarget.value);
  };
  const onsubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(props.user.userData);
    if (!title || !desc) {
      return alert("모든값을 넣어주셔야됩니다.");
    }
    const body = {
      writer: props.user.userData._id,
      Communutytitle: title,
      Communutydesc: desc,
      images: images,
      id: v4(),
    };
  };

  const onDropHandler = (files: any) => {
    let formData = new FormData();

    const config: any = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    axios.post("/api/contents/image", formData, config).then((response) => {
      if (response.data.success) {
        SetImages([...images, ...response.data.fileName]);
      } else {
        alert("파일을 저장하는데 실패했습니다.");
      }
    });
  };
  const deleteHandler = (image: string) => {
    const currentIndex = images.indexOf(image);
    let newImages = [...images];
    newImages.splice(currentIndex, 1);
    SetImages(newImages);
  };

  const ImageRendering = () => {
    if (images.length > 0) {
      return images.map((image, index) => {
        return (
          <div key={index} onClick={() => deleteHandler(image)}>
            <img
              key={index}
              style={{ minWidth: "100px", width: "200px", height: "200px" }}
              src={`http://localhost:5000/${image}`}
            />
          </div>
        );
      });
    } else if (Number(images.length) === 0) {
      return (
        <div style={{ opacity: "0.6" }}>
          <div>
            <img
              alt="돌하르방"
              src="https://pbs.twimg.com/media/EZ9pBFwU8AAKM6q.jpg"
              width="200px"
              height="200px"
            ></img>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className="  commununity_font"
      style={{
        position: "absolute",
        top: "100px",
        left: "300px",
        width: "700px",
      }}
    >
      <div className="container">
        <div className="welcome">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="pinkbox "
          >
            <div>
              <form onSubmit={onsubmitHandler}>
                <h2 style={{ position: "relative", top: "-10px" }}>Upload</h2>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: "10px",
                  }}
                >
                  <h3>제목:</h3>
                  <input
                    style={{
                      width: "355px",
                      marginLeft: "10px",
                      height: "25px",
                      border: "none",
                      borderRadius: "30px",
                    }}
                    value={title}
                    onChange={titleHandler}
                  ></input>
                </div>

                <textarea
                  style={{
                    width: "400px",
                    height: "300px",
                    border: "none",
                    borderRadius: "10px",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                  }}
                  placeholder="내용을 적어주세요.."
                  onChange={textareaHandler}
                ></textarea>
                <div
                  style={{ position: "relative", left: "120px", top: "10px" }}
                >
                  <button
                    className="custom-btn btn-16 update_btn"
                    style={{}}
                    type="submit"
                  >
                    등록
                  </button>
                </div>
                <div
                  style={{ position: "absolute", top: "60px", left: "600px" }}
                >
                  <Dropzone onDrop={onDropHandler}>
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <h3
                          style={{
                            width: "50px",
                            height: "50px",
                            whiteSpace: "nowrap",
                            position: "absolute",
                            top: "40px",

                            left: "7px",
                          }}
                        >
                          사진 업로드시 클릭!
                        </h3>
                      </div>
                    )}
                  </Dropzone>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      overflowY: "auto",
                      marginLeft: "5px",
                      zIndex: "300",
                      position: "absolute",
                      left: "-40px",
                      top: "80px",
                    }}
                  >
                    {ImageRendering()}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityUpdate;
