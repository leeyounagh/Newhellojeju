import React from "react";
import styled from "styled-components";
import Recomendation from "../../components/travelnews/Recomendation";
import VideoClip from "../../components/travelnews/VideoClip";

const SLayout = styled.div`
  width: 100%;
  margin-top: 200px;
  font-family: "Dovemayo_gothic";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.1/Dovemayo_gothic.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
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
