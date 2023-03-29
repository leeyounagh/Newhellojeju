import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import animationData from "../../lotties/139259-girl-with-suitcase.json";
import styled from "styled-components";
import Lottie from "react-lottie";
import OnChangeEvent from "../../utils/OnChangeEvent";
import axios from "axios";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const SLayout = styled.div`
  width: 100%;
  height: 100vh;
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
const SItemDiv = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  padding-top: 50px;
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
  height: 100%;
  text-align: center;
  h1 {
    margin-bottom: 30px;
    white-space: nowrap;
  }
  margin-left: 10px;
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
  password: string;
}

interface ConfirmPasswordType {
  confirmpassword: string;
}
interface EmailType {
  email?: string;
}
interface NameType {
  name?: string;
}

const RegisterPage = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState<EmailType | any>({ email: "" });
  const [Password, setPassword] = useState<PasswordType | any>({
    password: "",
  });
  const [confirmPassword, setconfirmPassword] = useState<
    ConfirmPasswordType | any
  >({
    confirmpassword: "",
  });
  const [Name, setName] = useState<NameType | any>({
    name: "",
  });
  console.log("테스트");
  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email } = Email;
    const { password } = Password;
    const { name } = Name;
    const { confirmpassword } = confirmPassword;

    if (password !== confirmpassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let body = {
      email: email,
      password: password,
      name: name,
    };
    try {
      const response = await axios.post("/api/users/register", body);
      const status = await response.status;

      if (status === 200) {
        navigate("/login");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <SLayout>
      <SForm onSubmit={onSubmitHandler}>
        <SItemDiv>
          <SLottieDiv>
            <Lottie options={defaultOptions} height={400} width="80%" />
            <h1>Come with HelloJeju</h1>
          </SLottieDiv>
          <SLoginDiv>
            <h1>Register</h1>
            <SDiv>
              <SInput
                name="name"
                placeholder="name"
                onChange={(event) => {
                  OnChangeEvent(
                    event.target.value,
                    event.target.name,
                    Name,
                    setName
                  );
                }}
              />
            </SDiv>
            <SDiv>
              <SInput
                type="email"
                name="email"
                placeholder="email"
                onChange={(event) => {
                  OnChangeEvent(
                    event.target.value,
                    event.target.name,
                    Email,
                    setEmail
                  );
                }}
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
              <SInput
                type="password"
                name="confirmpassword"
                placeholder="confirmpassword"
                onChange={(event) =>
                  OnChangeEvent(
                    event.target.value,
                    event.target.name,
                    confirmPassword,
                    setconfirmPassword
                  )
                }
              />
            </SDiv>
            <SDiv>
              <SButton type="submit">Register</SButton>
            </SDiv>
          </SLoginDiv>
        </SItemDiv>
      </SForm>
    </SLayout>
  );
};

export default RegisterPage;
