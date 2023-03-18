import React from "react";
import styled from "styled-components";
import Recomendation from "../../components/travelnews/Recomendation";
import VideoClip from "../../components/travelnews/VideoClip";

const SLayout = styled.div`
  border: 1px solid black;
  width: 100%;
`;
const TravelNews = () => {
  return (
    <SLayout>
      <VideoClip />
      <Recomendation />
    </SLayout>
  );
};

export default React.memo(TravelNews);
