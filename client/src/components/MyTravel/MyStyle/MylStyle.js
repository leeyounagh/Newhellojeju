import React, { useState } from "react";
import "./MyStyle.scss";
import axios from "axios";

const UserStyle = (props) => {
  const [UserTravelStyle, setUserTravelStyle] = useState("");
  const [count, setCount] = useState(0);
  const [lastStyle, setlaststyle] = useState(false);

  const StyleUpload = () => {
    let body = {
      UserStyle: UserTravelStyle,
    };

    axios.post(`/api/users/addToStyle`, body).then((response) => {
      if (response.data.success) {
        alert("스타일 설정완료!");

        console.log(response.data);
      } else {
        alert("스타일 업로드에 실패했습니다.");
      }
    });
  };
  const Stylehandler = (event) => {
    setUserTravelStyle(event.currentTarget.id);

    setlaststyle(true);
  };

  const StyleRender = () => {
    if (UserTravelStyle === "맛집여행자") {
      return (
        <div style={{ display: "flex", justifyContents: "center" }}>
          <div style={{ position: "relative", left: "200px" }}>
            <img
              style={{ borderRadius: "20px" }}
              src="https://i.pinimg.com/564x/bc/d0/1a/bcd01abdb94ca13dccfcd56e83c5944e.jpg"
              width="400px"
              height="400px"
            />
          </div>
        </div>
      );
    } else if (UserTravelStyle === "관광지중심여행자") {
      return (
        <div style={{ display: "flex" }}>
          <div style={{ position: "relative", left: "200px" }}>
            <img
              style={{ borderRadius: "20px" }}
              src="https://i.pinimg.com/564x/e9/10/c6/e910c69f6fc409a381747d22fa908c83.jpg"
              width="400px"
              height="400px"
            />
          </div>
        </div>
      );
    } else if (UserTravelStyle === "쇼핑중심여행자") {
      return (
        <div style={{ display: "flex", justifyContents: "center" }}>
          <div style={{ position: "relative", left: "200px" }}>
            <img
              style={{ borderRadius: "20px" }}
              src="https://i.pinimg.com/564x/62/ab/ad/62abad6dd69808a8e74b3a5d10a6052f.jpg"
              width="400px"
              height="400px"
            />
          </div>
        </div>
      );
    } else if (UserTravelStyle === "호캉스중심여행자") {
      return (
        <div style={{ position: "relative", left: "200px" }}>
          <img
            style={{
              borderRadius: "20px",
              display: "flex",
              justifyContents: "center",
            }}
            src="https://i.pinimg.com/564x/95/8d/ac/958dac43e60f054116c84cef0c1135a9.jpg"
            width="400px"
            height="400px"
          />
        </div>
      );
    }
  };
  const Renderer = () => {
    return (
      <>
        {lastStyle ? (
          <div>
            <h2 style={{ textAlign: "center" }}>
              당신의 여행스타일은: {UserTravelStyle}
            </h2>
            {StyleRender()}
            <button
              className="btn_hover"
              type="submit"
              style={{
                position: "relative",
                top: "-30px",
                left: "340px",
                borderRadius: "20px",
                border: "none",
                background: "white",
                width: "120px",
              }}
              onClick={StyleUpload}
            >
              선택완료
            </button>
          </div>
        ) : (
          <div>
            <h2 style={{ textAlign: "center" }}>
              당신의 여행스타일을 선택해주십시오
            </h2>
            <div style={{ display: "flex" }}>
              <div
                className="res_hover"
                style={{ width: "200px", height: "400px" }}
                id="맛집여행자"
                onClick={Stylehandler}
              >
                <img
                  style={{ borderRadius: "20px" }}
                  src="https://i.pinimg.com/564x/bc/d0/1a/bcd01abdb94ca13dccfcd56e83c5944e.jpg"
                  width="200px"
                  height="400px"
                />
                <h2
                  style={{
                    position: "relative",
                    top: "-40px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  맛집 여행자
                </h2>
              </div>
              <div
                className="spot_hover"
                id="관광지중심여행자"
                style={{ width: "200px", height: "400px" }}
                onClick={Stylehandler}
              >
                <img
                  style={{ borderRadius: "20px" }}
                  src="https://i.pinimg.com/564x/e9/10/c6/e910c69f6fc409a381747d22fa908c83.jpg"
                  width="200px"
                  height="400px"
                />
                <h2
                  style={{
                    position: "relative",
                    top: "-40px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  관광지중심여행자
                </h2>
              </div>
              <div
                className="shopping_hover"
                id="쇼핑중심여행자"
                style={{ width: "200px", height: "400px" }}
                onClick={Stylehandler}
              >
                <img
                  style={{ borderRadius: "20px" }}
                  src="https://i.pinimg.com/564x/62/ab/ad/62abad6dd69808a8e74b3a5d10a6052f.jpg"
                  width="200px"
                  height="400px"
                />
                <h2
                  style={{
                    position: "relative",
                    top: "-40px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  쇼핑중심여행자
                </h2>
              </div>
              <div
                className="hotel_hover"
                id="호캉스중심여행자"
                style={{ width: "200px", height: "400px" }}
                onClick={Stylehandler}
              >
                <img
                  style={{ borderRadius: "20px" }}
                  src="https://i.pinimg.com/564x/95/8d/ac/958dac43e60f054116c84cef0c1135a9.jpg"
                  width="200px"
                  height="400px"
                />
                <h2
                  style={{
                    position: "relative",
                    top: "-40px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  호캉스중심여행자
                </h2>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div
      className="usertravelStyle_font"
      style={{
        position: "absolute",
        top: "100px",
        left: "230px",
        width: "800px",
      }}
    >
      {Renderer()}
    </div>
  );
};

export default UserStyle;
