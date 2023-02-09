import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/User_action";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const LoginPage = (props: any) => {
  const dispatch = useDispatch();
  const NaviGate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = async (event: any) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };
    try {
      dispatch(await loginUser(body));
      NaviGate("/landing");
    } catch (err) {
      alert(`${err}`);
    }
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
            <div className="snoLeftEar"></div>
            <div className="snoLeftEarshadow"></div>
            <div className="snoRightEar"></div>
            <div className="snoRightEarshadow"></div>
          </div>
          <div id="face">
            <div className="snoLeftFace"></div>
            <div className="snoRightFace"></div>
          </div>
          <div id="leftWhiskers"></div>
          <div id="rightWhiskers"></div>
          <div id="eyes">
            <div className="snoLeftEye"></div>
            <div className="snoRightEye"></div>
            <div className="snoMouthLine"></div>
          </div>
        </div>
        <div style={{ zIndex: 10 }} id="snoBody">
          <div className="snoBelly"></div>
          <div id="marking">
            <div className="cresentBlock1"></div>

            <div className="cresentBlock2"></div>

            <div className="cresentBlock3"></div>

            <div className="cresentBlock4"></div>

            <div className="cresentBlock5"></div>

            <div className="cresentBlock6"></div>

            <div className="cresentBlock7"></div>
          </div>
        </div>
        <div id="arms">
          <div className="snoLeftArm"></div>
          <div className="snoRightArm"></div>
        </div>
        <div style={{ zIndex: 12 }} id="legs">
          <div className="snoLeftLeg">
            <div className="bottomLeft"></div>
          </div>
          <div style={{ zIndex: 5 }} className="snoRightLeg">
            <div style={{ zIndex: 5 }} className="bottomRight"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
