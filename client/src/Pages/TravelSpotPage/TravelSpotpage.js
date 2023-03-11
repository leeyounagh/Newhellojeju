import React, { useEffect, useState } from "react";

const TravelSpotpage = () => {
  const [northhover, setnorthhover] = useState(false);
  const [southhover, setsouthhover] = useState(false);

  useEffect(() => {
    console.log("확인", document.body.scrollHeight);
  }, []);

  const nortthhide = () => {
    setnorthhover(!northhover);
  };

  const southhide = () => {
    setsouthhover(!southhover);
  };
  function northmodal() {
    if (northhover) {
      return (
        <div
          style={{
            width: "300px",
            height: "300px",
            position: "absolute",
            left: "450px",
            top: "100px",
            background: "black",
            border: "1px solid black",
          }}
        >
          {" "}
          <img
            style={{
              width: "200px",
              height: "200px",
              position: "relative",
              left: "50px",
              top: "10px",
            }}
            src="image/북일러스트.jpg"
            alt="Test Img"
          />
          <br />
          <h2
            style={{
              color: "white",
              position: "relative",
              top: "20px",
              left: "50px",
              fontSize: "10px",
              whiteSpace: "nowrap",
            }}
          >
            제주시:한림읍,애월읍,구좌읍..등등{" "}
          </h2>
          <br />
          <h2
            style={{
              color: "white",
              fontSize: "10px",
              whiteSpace: "nowrap",
              position: "relative",
              left: "50px",
            }}
          >
            유명관광지:만장굴,한라산국립공원 등등..
          </h2>
          <h2
            style={{
              color: "white",
              fontSize: "10px",
              whiteSpace: "nowrap",
              position: "relative",
              left: "50px",
            }}
          >
            좀더 정보를 원한다면 클릭!
          </h2>
        </div>
      );
    } else {
      return null;
    }
  }

  function southmodal() {
    if (southhover) {
      return (
        <div
          style={{
            width: "300px",
            height: "300px",
            position: "absolute",
            left: "920px",
            top: "100px",
            background: "black",
          }}
        >
          {" "}
          <img
            style={{
              width: "200px",
              height: "200px",
              position: "relative",
              left: "50px",
              top: "10px",
            }}
            src="image/남일러스트.jpg"
            alt="Test Img"
          />
          <br />
          <h2
            style={{
              color: "white",
              position: "relative",
              top: "20px",
              left: "50px",
              fontSize: "10px",
              whiteSpace: "nowrap",
            }}
          >
            서귀포시:대정읍,남원읍,성산읍..등등{" "}
          </h2>
          <br />
          <h2
            style={{
              color: "white",
              fontSize: "10px",
              whiteSpace: "nowrap",
              position: "relative",
              left: "50px",
            }}
          >
            유명관광지:천제연폭포,카멜리아 힐 등등..
          </h2>
          <h2
            style={{
              color: "white",
              fontSize: "10px",
              whiteSpace: "nowrap",
              position: "relative",
              left: "50px",
            }}
          >
            좀더 정보를 원한다면 클릭!
          </h2>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div
      className="TravelSPot_font"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "600px",
        background: "#e8f8ff",
      }}
    >
      <img
        alt="제주지도"
        src="image/제주지도1.png"
        width="800px"
        height="500px"
        style={{ position: "absolute", top: "70px", opacity: "0.9" }}
      ></img>
      <div>
        <a
          onMouseEnter={nortthhide}
          onMouseLeave={nortthhide}
          style={{
            width: "90px",
            height: "60px",
            position: "absolute",
            top: "160px",
            left: "350px",
            color: "#506ea5",
            fontWeight: "900",
            fontSize: "30px",
          }}
          href="/northspot"
        >
          제주시
        </a>
      </div>

      <div>
        <a
          onMouseEnter={southhide}
          onMouseLeave={southhide}
          href="/southspot"
          style={{
            position: "absolute",
            top: "400px",
            left: "880px",
            color: "#506ea5",
            fontWeight: "900",
            fontSize: "30px",
          }}
        >
          서귀포시
        </a>
      </div>

      {northmodal()}
      {southmodal()}
    </div>
  );
};

export default TravelSpotpage;
