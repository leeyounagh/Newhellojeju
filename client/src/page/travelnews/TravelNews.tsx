import React from "react";
import styled from "styled-components";
import Recomendation from "../../components/travelnews/Recomendation";
import VideoClip from "../../components/travelnews/VideoClip";

const SLayout = styled.div`
  width: 100%;
  margin-top: 200px;
`;
const STitleDiv = styled.div`
  margin-top: 100px;
  text-align: center;
  font-size: 1.5rem;
`;
const TravelNews = () => {
  return (
    <SLayout>
      <VideoClip />
      <STitleDiv>
        <h1>Hello Jeju 추천</h1>
      </STitleDiv>
      <Recomendation />
    </SLayout>
  );
};

export default React.memo(TravelNews);
