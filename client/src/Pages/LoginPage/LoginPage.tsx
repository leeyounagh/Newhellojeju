import { useDispatch } from "react-redux";
import { loginUser } from "../../_actions/User_action";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    </div>
  );
};

export default LoginPage;
