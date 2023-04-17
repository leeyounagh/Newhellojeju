import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnChangeEvent from "../../utils/OnChangeEvent";
import styled from "styled-components";
import animationData from "../../lotties/2523-loading.json";
import Lottie from "react-lottie";
import axios, { AxiosResponse } from "axios";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const SLayout = styled.div`
  background: white;
  overflow-y: hidden;
  margin-top: 80px;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SForm = styled.form`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
`;
const SLottieDiv = styled.div`
  width: 80%;
  height: 100%;

  text-align: center;
  margin-right: 10px;
  h1 {
    margin-top: 30px;
    white-space: nowrap;
  }
`;
const SLoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 90%;
  text-align: center;
  h1 {
    margin-bottom: 30px;
    white-space: nowrap;
  }
  margin-left: 10px;
`;
const SItemDiv = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  padding-top: 50px;
`;
const SInput = styled.input`
  height: 60px;
  width: 400px;
  border-radius: 10px;
  font-size: 20px;
  padding-left: 10px;
  outline: none !important;
  border-color: #89a6ae;
  -webkit-appearance: none;

  -moz-appearance: none;

  appearance: none;
`;
const SButton = styled.button`
  height: 60px;
  width: 400px;
  color: #f3efe6;
  border-radius: 10px;
  background-color: #333333;
  font-weight: 900;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #89a6ae;
  }
  -webkit-appearance: none;

  -moz-appearance: none;

  appearance: none;
  border: 0;
  outline: 0;
`;
const SDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
interface PasswordType {
  password?: string;
}

interface EmailType {
  email?: string;
}

const LoginPage = () => {
  const NaviGate = useNavigate();
  const [Email, setEmail] = useState<EmailType | any>({ email: "" });
  const [Password, setPassword] = useState<PasswordType | any>({
    password: "",
  });

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email } = Email;
    const { password } = Password;
    let body = {
      email: email,
      password: password,
    };

    try {
      const response: AxiosResponse = await axios.post(
        "https://be.hellojeju.shop/api/users/login",
        body
      );

      const status: AxiosResponse = await response.data.loginSuccess;

      if (status) {
        NaviGate("/landing");
        window.location.reload();
      } else {
        alert("Error˝");
      }
    } catch (err) {
      alert(`${err}`);
    }
  };

  return (
    <SLayout>
      <SForm onSubmit={onSubmitHandler}>
        <SItemDiv>
          <SLottieDiv>
            <Lottie options={defaultOptions} height={400} width="100%" />
            <h1>Welcome to HelloJeju</h1>
          </SLottieDiv>
          <SLoginDiv>
            <h1>Login</h1>
            <SDiv>
              <SInput
                name="email"
                placeholder="email"
                onChange={(event) =>
                  OnChangeEvent(
                    event.target.value,
                    event.target.name,
                    Email,
                    setEmail
                  )
                }
              />
            </SDiv>
            <SDiv>
              <SInput
                type="password"
                name="password"
                placeholder="password"
                onChange={(event) =>
                  OnChangeEvent(
                    event.target.value,
                    event.target.name,
                    Password,
                    setPassword
                  )
                }
              />
            </SDiv>
            <SDiv>
              <SButton type="submit">Login</SButton>
            </SDiv>
          </SLoginDiv>
        </SItemDiv>
      </SForm>
    </SLayout>
  );
};

export default LoginPage;
