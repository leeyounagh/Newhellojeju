import React, { useEffect } from "react";

const MiddleRight = () => {
  var clock = {
    el: "#clock",
    data: {
      time: "",
      date: "",
    },
  };
  useEffect(() => {
    Date();
  }, []);
  var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  updateTime();
  function updateTime() {
    var cd = new Date();
    clock.time =
      zeroPadding(cd.getHours(), 2) +
      ":" +
      zeroPadding(cd.getMinutes(), 2) +
      ":" +
      zeroPadding(cd.getSeconds(), 2);
    clock.date =
      zeroPadding(cd.getFullYear(), 4) +
      "-" +
      zeroPadding(cd.getMonth() + 1, 2) +
      "-" +
      zeroPadding(cd.getDate(), 2) +
      " " +
      week[cd.getDay()];
  }

  function zeroPadding(num, digit) {
    var zero = "";
    for (var i = 0; i < digit; i++) {
      zero += "0";
    }
    return (zero + num).slice(-digit);
  }

  useEffect(() => {
    window.addEventListener("scroll", event);

    return () => window.removeEventListener("scroll", event);
  }, []);

  const event = () => {
    console.log(window.scrollY);
    fade();
  };

  const fade = () => {
    if (window.scrollY > 420) {
      return (
        <div
          className="LandingMain_Translate1"
          style={{ position: "absolute", top: "-600px", width: "300px" }}
        >
          <h2
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              fontSize: "35px",
              whiteSpace: "nowrap",
              fontWeight: "900",
            }}
          >
            이제 제주도 갈시간!
          </h2>
          <h2
            style={{
              color: "white",
              whiteSpace: "nowrap",
              display: "flex",
              justifyContent: "center",
              fontSize: "35px",
              fontWeight: "900",
            }}
          >
            Hello Jeju와함께 계획을 짜보아요!
          </h2>
        </div>
      );
    } else {
      return (
        <div
          className="LandingMain_Translate1"
          style={{ position: "absolute", top: "-600px", width: "300px" }}
        >
          <h2
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              fontSize: "35px",
              whiteSpace: "nowrap",
              fontWeight: "900",
            }}
          >
            이제 제주도 갈시간!
          </h2>
          <h2
            style={{
              color: "white",
              whiteSpace: "nowrap",
              display: "flex",
              justifyContent: "center",
              fontSize: "35px",
              fontWeight: "900",
            }}
          >
            Hello Jeju와함께 계획을 짜보아요!
          </h2>
        </div>
      );
    }
  };

  return (
    <div
      className="middle_fade  fade-in "
      style={{
        position: "absolute",
        top: "850px",
        left: "750px",
        fontWeight: "500",
        overflowY: "none",
      }}
    >
      {fade()}
    </div>
  );
};

export default MiddleRight;
