import React, { MouseEvent, useRef } from "react";
import styled from "styled-components";
import NewsData from "../../data/NewsData";
import color from "../../styles/colors";

const SLayout = styled.div`
  height: 70vh;
  display: flex;
`;
const SVideoDiv = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SClipDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  button {
    width: 50%;
    height: 90%;
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
  }
`;
const SVideo = styled.video`
  object-fit: fill;
  width: 50vw;
  height: 55vh;
`;

const SEditorDiv = styled.div`
  border: 1px solid lightgray;
  width: 40%;
  height: 100%;

  h2 {
    height: 23%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const SDescDiv = styled.div`
  height: 60%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const SBtnDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
`;
const SDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
const VideoClip = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleClip = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLDivElement;
    const startTime = parseFloat(target.dataset.start || "0"); // 0을 기본값으로 설정합니다.
    if (videoRef.current) {
      // null 체크
      videoRef.current.currentTime = startTime;
      videoRef.current.autoplay = true;
    }
  };
  return (
    <SLayout>
      <SVideoDiv>
        <SVideo ref={videoRef} controls src="video/제주도추천.mp4" />
      </SVideoDiv>
      <SEditorDiv>
        <h2>에디터와 떠나는 제주 여행</h2>
        <SDescDiv>
          <SClipDiv>
            {NewsData.map((item) => {
              return (
                <SBtnDiv>
                  <SDiv>
                    <button onClick={handleClip} data-start={item.start}>
                      {item.name}
                    </button>
                  </SDiv>

                  <SDiv>{item.title}</SDiv>
                </SBtnDiv>
              );
            })}
          </SClipDiv>
        </SDescDiv>
      </SEditorDiv>
    </SLayout>
  );
};

export default VideoClip;
