import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";

const NavBar = (props) => {
  const user = useSelector((state) => state.user);
  const NaviGate = useNavigate();

  useEffect(() => {});
  const logoutHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.status === 200) {
        NaviGate("/login");
      } else {
        alert("로그아웃에 실패했습니다.");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <div
        className="nav_text2"
        style={{
          position: "fixed",
          top: "0px",
          width: "100%",
          height: "60px",
          left: "0px",
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
          zIndex: "300",
          background: "#94b1b9",
        }}
      >
        <div>
          <a
            href="/landing"
            className="nav_text"
            style={{
              marginRight: "10px",
              marginTop: "30px",
              color: "#f3efe6",
              fontSize: "18px",
              fontWeight: "900",
              position: "absolute",
              left: "200px",
              top: "-15px",
            }}
          >
            Home
          </a>
        </div>
        <div>
          <a
            href="/register"
            className="nav_text"
            style={{
              marginRight: "10px",
              marginTop: "30px",
              color: "#f3efe6",
              fontSize: "18px",
              fontWeight: "900",
              position: "absolute",
              left: "810px",
              top: "-15px",
            }}
          >
            Register
          </a>
          <a
            href="/login"
            className="nav_text"
            style={{
              marginRight: "10px",
              marginTop: "30px",
              color: "#f3efe6",
              fontSize: "18px",
              fontWeight: "900",
              position: "absolute",
              left: "900px",
              top: "-15px",
            }}
          >
            Login
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="nav_text2"
        style={{
          position: "fixed",
          top: "0px",
          width: "100%",
          left: "0px",
          height: "60px",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
          color: "black",
          zIndex: "500",
          background: "#94b1b9",
        }}
      >
        <div>
          <a
            href="/landing"
            className="nav_text"
            style={{
              marginRight: "10px",
              marginTop: "20px",
              color: "#f3efe6",
              weight: "50",
              fontSize: "18px",
              fontWeight: "900",
              position: "absolute",
              left: "200px",
              top: "-10px",
            }}
          >
            Home
          </a>
        </div>
        <div>
          <a
            href="/travelspot"
            className="nav_text"
            style={{
              marginRight: "30px",
              marginTop: "50px",
              color: "#f3efe6",
              weight: "50",
              fontSize: "18px",
              fontWeight: "900",
              position: "absolute",
              left: "560px",
              top: "-38px",
            }}
          >
            TravelSpot
          </a>

          <a
            href="/travelnews"
            className="nav_text"
            style={{
              marginRight: "30px",
              marginTop: "30px",
              color: "#f3efe6",
              weight: "50",
              fontSize: "18px",
              fontWeight: "900",
              position: "absolute",
              left: "670px",
              top: "-18px",
            }}
          >
            News
          </a>

          <a
            href="/community"
            className="nav_text"
            style={{
              marginRight: "30px",
              marginTop: "30px",
              color: "#f3efe6",
              weight: "50",
              fontSize: "18px",
              fontWeight: "900",
              position: "absolute",
              left: "730px",
              top: "-18px",
            }}
          >
            community
          </a>

          <a
            href="/userstyle"
            className="nav_text"
            style={{
              marginRight: "30px",
              marginTop: "50px",
              color: "#f3efe6",
              weight: "70",
              fontSize: "18px",
              fontWeight: "900",
              color: "#f58d9c",
              position: "absolute",
              left: "845px",
              top: "-32px",
            }}
          >
            <BsHeartFill></BsHeartFill>
          </a>

          <a
            href="/mytravel"
            className="nav_text"
            style={{
              marginRight: "30px",
              marginTop: "30px",
              color: "#f3efe6",
              weight: "70",
              fontSize: "17px",
              fontWeight: "900",
              position: "absolute",
              left: "875px",
              top: "-15px",
            }}
          >
            MyTravel
          </a>
          <a
            onClick={logoutHandler}
            className="nav_text"
            style={{
              marginRight: "30px",
              marginTop: "30px",
              color: "#f3efe6",
              weight: "50",
              fontSize: "18px",
              fontWeight: "900",
              position: "absolute",
              left: "965px",
              top: "-15px",
            }}
          >
            logout
          </a>
        </div>
      </div>
    );
  }
};

export default NavBar;
