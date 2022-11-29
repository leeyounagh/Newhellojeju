import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ".//MytravelUpdate.scss";

const MyscheduleDetail = (props) => {
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    scheduleDetail();
  }, []);
  const scheduleDetail = () => {
    console.log(props.user.userData);
    if (props.user.userData && props.user.userData.schedule) {
      const newId = props.user.userData.schedule.findIndex(
        (item) => item.id === id
      );

      let newDetail = props.user.userData.schedule[newId];
      return (
        <div>
          <div
            style={{
              position: "absolute",
              top: "120px",
              left: "300px",
              height: "400px",
              border: "1px solid lightgray",
              width: "700px",
              borderRadius: "30px",
              background: "#DAEAF1",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              제목: {newDetail.title}
            </div>

            <br />
            <div style={{ position: "absolute", top: "65px", left: "40px" }}>
              여행스타일:{newDetail.style}
              <br />
            </div>
            <div style={{ position: "absolute", top: "90px", left: "40px" }}>
              <div>제주도 도착하는날:{newDetail.startDate.substr(0, 10)}</div>
              <div>집으로 가는날:{newDetail.endDate.substr(0, 10)}</div>
            </div>

            <br />
            <div
              style={{
                position: "absolute",
                top: "140px",
                left: "40px",
                width: "600px",
              }}
            >
              여행일정:{newDetail.desc}
            </div>

            <br />
          </div>
        </div>
      );
    }
  };
  return (
    <div className="travelDetail1" style={{ height: "750px" }}>
      <div style={{ position: "absolute", top: "80px", left: "600px" }}>
        <h2>나의 스케쥴</h2>
      </div>
      {scheduleDetail()}
    </div>
  );
};

export default MyscheduleDetail;
