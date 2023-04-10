import React, { CSSProperties, useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, HashNavigation } from "swiper";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostType } from "../../types/types";
const SLayout = styled.div`
  width: 100%;
  height: 30vh;
  padding-right: 50px;
  .swiper {
    width: 80%;
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
interface SwiperStyle extends CSSProperties {
  "--swiper-navigation-color": string;
}
// css 타입지정할때

export default function Carousol() {
  const list = useSelector((state: RootState) => state?.CommunityReducer?.list);

  return (
    <SLayout>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "black",
          } as SwiperStyle
        }
        slidesPerView={3}
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        {list?.map((item: PostType) => {
          return (
            <>
              <SwiperSlide style={{ marginLeft: "50px" }}>
                <Link to={`/community/${item._id}`}>
                  {
                    <img
                      // src={`http://43.201.26.114/images/${item?.images?.[0]}`}
                      src={`http://localhost:5000/${item?.images?.[0]}`}
                      // src={`http://hellojeju.shop/${item?.images?.[0]}`}
                      // src={`http://43.201.26.114/images/${item?.images?.[0]}`}
                      alt={item?.Communutytitle}
                    />
                  }
                </Link>
                ;
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </SLayout>
  );
}
