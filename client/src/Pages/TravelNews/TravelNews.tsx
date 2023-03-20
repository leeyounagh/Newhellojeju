import React from "react";
import styled from "styled-components";
import Recomendation from "../../components/travelnews/Recomendation";
import VideoClip from "../../components/travelnews/VideoClip";

const SLayout = styled.div`
  border: 1px solid black;
  width: 100%;
  margin-top: 100px;
`;
const STitleDiv = styled.div`
  border: 1px solid black;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
const TravelNews = () => {
  return (
    <SLayout>
      <STitleDiv>
        <h1>News</h1>
      </STitleDiv>

      <VideoClip />
      <Recomendation />
    </SLayout>
  );
};

export default React.memo(TravelNews);
