import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Southmodal from "../../components/travelspot/SouthModal";
import NorthModal from "../../components/travelspot/NorthModal";

const SLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #e8f8ff;
  position: relative;
  a {
    text-decoration: none;
    color: #506ea5;
  }
`;

const SImg = styled.img`
  width: 80%;
  height: 80%;
  margin-top: 100px;
`;
const SNorthDiv = styled.div`
  width: 150px;
  height: 60px;
  z-index: 50;
  position: absolute;
  top: 40%;
  left: 21%;
  font-size: 30px;
  font-weight: 900;
`;
const SSouthDiv = styled.div`
  width: 150px;
  height: 60px;
  z-index: 50;
  position: absolute;
  top: 55%;
  left: 75%;
  font-size: 30px;
  font-weight: 900;
  color: #506ea5;
`;
const TravelSpotpage = () => {
  const [northhover, setnorthhover] = useState<boolean>(false);
  const [southhover, setsouthhover] = useState<boolean>(false);

  useEffect(() => {
    console.log("확인", document.body.scrollHeight);
  }, []);

  const nortthhide = () => {
    setnorthhover(!northhover);
  };

  const southhide = () => {
    setsouthhover(!southhover);
  };

  return (
    <SLayout>
      <SImg alt="제주지도" src="image/제주지도1.png" />
      <SNorthDiv>
        <Link
          onMouseEnter={nortthhide}
          onMouseLeave={nortthhide}
          to="/northspot"
        >
          제주시
        </Link>
      </SNorthDiv>

      <SSouthDiv>
        <Link onMouseEnter={southhide} onMouseLeave={southhide} to="/southspot">
          서귀포시
        </Link>
      </SSouthDiv>

      {northhover ? <NorthModal /> : null}
      {southhover ? <Southmodal /> : null}
    </SLayout>
  );
};

export default TravelSpotpage;
