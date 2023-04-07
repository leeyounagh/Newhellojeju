import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import color from "../../styles/colors";

const animation = keyframes`
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }

`;

const SLayout = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 999;
  cursor: pointer;

  .topBtn {
    width: 60px;
    height: 60px;
    background-color: ${color.main};
    border-radius: 60px;
    text-align: center;
    animation: ${animation} 0.5s ease-in-out;
    box-shadow: 0 0 10px 0 rgba(256, 256, 256, 0.5);

    &:active {
      background: ${color.gray1};
    }
    img {
      padding-top: 22px;
    }
  }
`;

function TopBtn() {
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    });
  }, []);

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <SLayout>
      {isTop && (
        <div className="topBtn" onClick={onClick}>
          <img src="/image/icn-top.svg" alt="topBtn" />
        </div>
      )}
    </SLayout>
  );
}

export default TopBtn;
