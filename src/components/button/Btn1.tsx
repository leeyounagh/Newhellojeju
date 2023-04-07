import React from "react";
import styled from "styled-components";
import color from "../../styles/colors";

const Slayout = styled.div`
  width: 100%;
  height: 50px;
`;

const SBtn1 = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${color.gray1};
  color: ${color.white};
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border: none;

  &:active {
    background: ${color.gray3};
  }

  &:hover {
    background: ${color.main};
  }
`;

type TitleType = {
  title: String;
};

function Btn1({ title }: TitleType) {
  return (
    <Slayout>
      <SBtn1>{title}</SBtn1>
    </Slayout>
  );
}

export default Btn1;
