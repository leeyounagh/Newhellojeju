import React from "react";
import styled from "styled-components";
import color from "../../styles/colors";

const Slayout = styled.div`
  width: 100%;
  height: 50px;
`;

const SBtn2 = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${color.white};
  color: ${color.gray1};
  border: 1px solid ${color.gray2};
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  &:active {
    background: ${color.gray5};
  }

  &:hover {
    border: 1px solid ${color.main};
    color: ${color.main};
`;

function Btn2({ title }: any) {
  return (
    <Slayout>
      <SBtn2>{title}</SBtn2>
    </Slayout>
  );
}

export default Btn2;
