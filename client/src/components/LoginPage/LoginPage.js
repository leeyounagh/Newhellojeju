import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/User_action";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const NaviGate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        NaviGate("/landing");
      } else {
        alert("Error˝");
      }
    });

    dispatch(loginUser(body));
  };

  return (
    <div
      className="login_background"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "120vh",
      }}
    >
      <form
        className="login_font"
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label
          style={{
            zIndex: "100",
            position: "relative",
            left: "-20px",
            weight: "100",
            top: "30px",
          }}
        >
          Email
        </label>
        <input
          style={{
            zIndex: "100",
            position: "relative",
            left: "-10px",
            height: "20px",
            borderRadius: "50px",
            top: "30px",
          }}
          type="email"
          value={Email}
          onChange={onEmailHandler}
        />
        <label
          style={{
            zIndex: "100",
            position: "relative",
            left: "-20px",
            top: "30px",
          }}
        >
          Password
        </label>
        <input
          style={{
            zIndex: "100",
            position: "relative",
            left: "-10px",
            height: "20px",
            borderRadius: "50px",
            top: "30px",
          }}
          type="password"
          value={Password}
          onChange={onPasswordHandler}
        />
        <br />
        <button
          style={{
            zIndex: "100",
            position: "relative",
            left: "55px",
            top: "20px",
            width: "50px",
            borderRadius: "30px",
            background: "white",
          }}
          type="submit"
        >
          login
        </button>
      </form>

      <div
        style={{ position: "relative", top: "-100px", left: "-100px" }}
        className="login_body"
        id="snotomax"
      >
        <div id="shakeHead">
          <div id="snoHead"></div>
          <div style={{ background: " rgb(237, 255, 246);" }} id="ears">
            <div class="snoLeftEar"></div>
            <div class="snoLeftEarshadow"></div>
            <div class="snoRightEar"></div>
            <div class="snoRightEarshadow"></div>
          </div>
          <div id="face">
            <div class="snoLeftFace"></div>
            <div class="snoRightFace"></div>
          </div>
          <div id="leftWhiskers"></div>
          <div id="rightWhiskers"></div>
          <div id="eyes">
            <div class="snoLeftEye"></div>
            <div class="snoRightEye"></div>
            <div class="snoMouthLine"></div>
          </div>
        </div>
        <div style={{ zIndex: 10 }} id="snoBody">
          <div class="snoBelly"></div>
          <div id="marking">
            <div class="cresentBlock1"></div>

            <div class="cresentBlock2"></div>

            <div class="cresentBlock3"></div>

            <div class="cresentBlock4"></div>

            <div class="cresentBlock5"></div>

            <div class="cresentBlock6"></div>

            <div class="cresentBlock7"></div>
          </div>
        </div>
        <div id="arms">
          <div class="snoLeftArm"></div>
          <div class="snoRightArm"></div>
        </div>
        <div style={{ zIndex: 12 }} id="legs">
          <div class="snoLeftLeg">
            <div class="bottomLeft"></div>
          </div>
          <div style={{ zIndex: 5 }} class="snoRightLeg">
            <div style={{ zIndex: 5 }} class="bottomRight"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
