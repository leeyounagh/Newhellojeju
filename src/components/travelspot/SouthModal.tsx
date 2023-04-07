import React from "react";
import styled from "styled-components";

const SLayout = styled.div`
  width: 300px;
  height: 380px;
  position: absolute;
  left: 80%;
  top: 14%;
  background: black;

  h2 {
    color: white;
    white-space: nowrap;
    font-size: 15px;
    text-align: center;
  }
`;
const SImg = styled.img`
  width: 80%;
  height: 200px;
  display: flex;
  justify-content: center;
`;
const SImgDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const SouthModal = () => {
  return (
    <SLayout>
      <SImgDiv>
        <SImg src="image/남일러스트.jpg" alt="남쪽이미지" />
      </SImgDiv>

      <br />
      <h2>서귀포시:대정읍,남원읍,성산읍..등등 </h2>
      <br />
      <h2>유명관광지:천제연폭포,카멜리아 힐 등등..</h2>
      <h2>좀더 정보를 원한다면 클릭!</h2>
    </SLayout>
  );
};

export default SouthModal;
