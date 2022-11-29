import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TravelCommunity from "./TravelCommunity";
const CommunityDetail = (props) => {
  const { productId } = useParams();
  const [community, setCommunity] = useState([]);
  const [comment, SetComment] = useState("");
  const [allComment, setAllcomment] = useState([]);
  const [Img, SetImg] = useState([]);

  useEffect(() => {
    axios
      .get(
        `/api/users/addcommunity/letter/letter_by_id?contentsid=${productId}&type=single`
      )
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.product, response.data.product[0].comment);
          setCommunity(response.data.product);

          setAllcomment(response.data.product[0].comment);
          SetImg(response.data.product[0].images);
        } else {
          alert("게시글을 가져오는데 실패하였습니다.");
        }
      });
  }, []);

  const getComment = (event) => {
    console.log(props.user.userData);
    const body = {
      writer: props.user.userData.name,
      comment: comment,
    };
    axios
      .post(
        `/api/users/addcommunity/letter/comment?contentsid=${productId}`,
        body
      )
      .then((response) => {
        if (response.data.success) {
          console.log(response.data);
        } else {
          alert("댓글을 작성하는데 실패했습니다.");
        }
      });
  };

  useEffect(() => {
    CommentArea();
  }, [comment]);
  const inputHandler = (event) => {
    console.log(event.currentTarget.value);
    SetComment(event.currentTarget.value);
  };
  const CommentArea = () => {
    return (
      <div>
        {allComment.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-around",
                borderBottom: "1px solid lightgray",
                height: "40px",
                width: "650px",
                padding: "10px",
              }}
            >
              <div style={{ position: "absolute", left: "0px" }}>
                {item.comment}
              </div>
              <div style={{ position: "absolute", left: "500px" }}>
                작성자:{item.writer}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const ImgRendering = () => {
    console.log(Img);
    return (
      <div>
        {Img.map((item, index) => {
          return (
            <div>
              <img
                alt={index}
                src={`http://localhost:5000/${item}`}
                style={{ maxWidth: "500px", maxWidth: "500px" }}
              ></img>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className="commununity_font"
      style={{
        position: "absolute",
        top: "100px",
        left: "350px",
        height: "30000px",
      }}
    >
      {community.map((item, index) => {
        return (
          <div key={index}>
            <div style={{ borderBottom: "1px solid lightgray" }}>
              <h3>제목: {item.Communutytitle}</h3>{" "}
            </div>
            <div>
              <h5>작성자:{item.writer.name}</h5>
            </div>
            <br />
            <br />

            <div>{item.Communutydesc}</div>
          </div>
        );
      })}

      {ImgRendering()}
      <div style={{ marginTop: "100px", borderBottom: "1px solid lightgray" }}>
        <div>
          <h3>Comment</h3>{" "}
        </div>
      </div>

      <div style={{ marginTop: "30px", display: "flex", width: "680px" }}>
        <form onSubmit={getComment}>
          <input
            style={{
              width: "600px",
              borderBottom: "1px solid lightgray",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              marginRight: "10px",
            }}
            placeholder="댓글을 입력하세요"
            onChange={inputHandler}
            value={comment}
          ></input>
          <button
            class="custom-btn2 btn-162 update_btn2"
            style={{
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "400",
              position: "relative",
              left: "610px",
              top: "-30px",
            }}
            type="submit"
          >
            등록
          </button>
        </form>
      </div>
      {CommentArea()}
    </div>
  );
};

export default CommunityDetail;
