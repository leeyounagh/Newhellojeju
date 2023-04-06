import React, { MouseEvent, useState } from "react";
import styled from "styled-components";
import { GiTangerine } from "react-icons/gi";
import { GiShop } from "react-icons/gi";
import { MdLocalHotel } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import color from "../../styles/colors";
import { useDispatch } from "react-redux";
import { setContentInformation } from "../../slice/TravelContetSlice";

const SLayout = styled.div`
  width: 100%;
  height: 10vh;
  margin-top: 30px;
  display:flex;
  align-items;
  margin-left:100px;

  font-size: 1.2rem;
`;
const SItemDiv = styled.div`
  width: 200px;
  height: 70%;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  z-index: 50;
  &:hover {
    background: ${color.main};
    color: white;
  }
`;
const SDiv = styled.div`
  margin-right: 10px;
`;

const Filters = () => {
  const dispatch = useDispatch();

  const ContentHandler = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLDivElement;

    dispatch(setContentInformation(target?.dataset?.id));

    // target의 경우 자식요소의 dataset을 찾기때문에 undifiend값이 나오고 currentTarget의경우에는 이벤트 버블링으로 인하여 자기자신을 지칭하게됨
  };
  return (
    <SLayout>
      <SItemDiv onClick={ContentHandler} data-id="c1">
        <SDiv>
          <GiTangerine size={25} />
        </SDiv>
        <SDiv>
          <h3>관광지</h3>
        </SDiv>
      </SItemDiv>
      <SItemDiv onClick={ContentHandler} data-id="c2">
        <SDiv>
          <GiShop size={25} />
        </SDiv>
        <SDiv>
          <h3>쇼핑</h3>
        </SDiv>
      </SItemDiv>
      <SItemDiv onClick={ContentHandler} data-id="c3">
        <SDiv>
          <MdLocalHotel size={25} />
        </SDiv>
        <SDiv>
          <h3>호텔</h3>
        </SDiv>
      </SItemDiv>
      <SItemDiv onClick={ContentHandler} data-id="c4">
        <SDiv>
          <MdRestaurantMenu size={25} />
        </SDiv>
        <SDiv>
          <h3>맛집</h3>
        </SDiv>
      </SItemDiv>
    </SLayout>
  );
};

export default Filters;
