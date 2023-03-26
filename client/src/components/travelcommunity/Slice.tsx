import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const SLayout = styled.div`
  width: 100%;
  height: 30vh;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 50%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function Slice() {
  return (
    <SLayout>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./image/커뮤니티.jpg" alt="테스트"></img>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="./image/쇼핑.png" alt="테스트"></img>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="./image/쇼핑.png" alt="테스트"></img>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="./image/쇼핑.png" alt="테스트"></img>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="./image/쇼핑.png" alt="테스트"></img>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="./image/쇼핑.png" alt="테스트"></img>
        </SwiperSlide>
      </Swiper>
    </SLayout>
  );
}
