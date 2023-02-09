import "./PageIntroduce.scss";

const LandingIndroduce = () => {
  return (
    <div
      className="bottom_body"
      style={{
        height: "600px",
        position: "absolute",
        top: "1230px",
        left: "0px",
        display: "flex",
        justifyContent: "center",
        background: "#89a6ae",
      }}
    >
      <section className="container">
        <div
          style={{ position: "absolute", left: "-230px", top: "130px" }}
          className="card_outer"
        >
          <div className="card">
            <div className="content">
              <h2 className="title" style={{ whiteSpace: "nowrap" }}>
                Travel Spot
              </h2>
              <p style={{ fontSize: "10px" }} className="copy">
                제주도는 북쪽으로는 제주시, 남쪽에는 서귀포시로 나누어져
                있습니다. 각지역별 맛집,관광지,호텔,쇼핑스팟까지 한눈에 보며,
                관심있는 곳은 찜해두고 여행계획에 추가해보아요!
              </p>
              <a href="/travelspot">
                <div className="btn">바로가기</div>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h2 className="title">News</h2>
              <p style={{ fontSize: "10px" }} className="copy">
                에디터가 추천해주는 제주 스팟들과 Hello Jeju 추천
                관광지,맛집,쇼핑스팟,호텔을 지도와 함께 위치를 확인하며 계획에
                추가해보세요!{" "}
              </p>
              <a href="/travelnews">
                <div className="btn">바로가기</div>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h2 className="title">Community</h2>
              <p style={{ fontSize: "10px" }} className="copy">
                Hello Jeju 유저들과 제주여행 정보 공유하고, 서로 소통하며 더욱더
                Hello Jeju를 즐겨보세요!
              </p>
              <a href="/community">
                <div className="btn">바로가기</div>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h2 className="title">My Travel</h2>
              <p className="copy">당신의 제주 여행 계획을 세워보세요!</p>
              <a href="/mytravel">
                <div className="btn">바로가기</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingIndroduce;
