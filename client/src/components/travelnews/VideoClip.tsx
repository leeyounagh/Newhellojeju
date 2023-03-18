import React, { RefObject, useRef } from "react";
import styled from "styled-components";

const SLayout = styled.div`
  border: 1px solid black;
  height: 60vh;
  margin-top: 100px;
  display: flex;
`;
const SVideoDiv = styled.div`
  width: 60%;
  border: 1px solid black;
  height: 100%;
`;
const SClipDiv = styled.div``;
const SVideo = styled.video`
  object-fit: fill;
  width: 50vw;
  height: 50vh;
`;

const VideoClip = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleClip = () => {
    console.log(videoRef?.current?.currentTime);
    //   null일 수도 있으므로 null 체크가 필요합니다. videoRef.current?.focus();
  };
  return (
    <SLayout>
      <SVideoDiv>
        <SVideo ref={videoRef} controls src="video/제주도추천.mp4" />
      </SVideoDiv>
      <SClipDiv>
        <div
          onClick={() => {
            handleClip();
          }}
        >
          테스트
        </div>
      </SClipDiv>
    </SLayout>
  );
};

export default VideoClip;
