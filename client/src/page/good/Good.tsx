import React, { useEffect, useState } from "react";
import styled from "styled-components";
import animationData from "../../lotties/52009-wishlist.json";
import Lottie from "react-lottie";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import axios from "axios";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const SLayout = styled.div`
  width: 100%;
  margin-top: 100px;
  padding-bottom: 100px;
`;
const SLottieDiv = styled.div`
  border-bottom: 1px solid lightgray;
  width: 50%;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
  }
`;
const STitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
const SListDiv = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;
const SItemDiv = styled.div`
  border: 1px solid lightgray;
  width: 50%;
  height: 10vh;
  display: flex;
  margin-top: 10px;
`;
const SItemImage = styled.img`
  width: 20%;
  height: 100%;
`;
const SItemAdress = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SItemTitle = styled.div`
  width: 20%;
  height: 100%;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SIconDiv = styled.div`
  width: 10%;
  height: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
`;
type SWishListType = {
  address: string;
  date: number;
  id: string;
  image: string;
  quantity: number;
  title: string;
};
const UserStyle = () => {
  const user = useSelector((state: RootState) => state.UserReducer.user);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    if (user?.[0]?.good) {
      setWishList(user[0].good);
    } else {
      setWishList([]);
    }
  }, [user]);

  // 이미지 타이틀 주소 삭제
  const handleDeleteItem = async (item: SWishListType) => {
    try {
      let response = await axios.get(`/api/users/removeFromGood?id=${item.id}`);
      const data = await response.data;
      console.log("data", data);
      alert("삭제에 성공 했습니다.");
      window.location.reload();
    } catch (err) {
      if (err) {
        alert("삭제에 실패 했습니다.");
      }
    }
  };
  return (
    <SLayout>
      <STitleDiv>
        <SLottieDiv>
          <Lottie
            options={defaultOptions}
            width={200}
            height={250}
            style={{ margin: "0px" }}
          />
          <h1>WishList</h1>
        </SLottieDiv>
      </STitleDiv>
      <SListDiv>
        {wishList?.map((item: SWishListType) => {
          return (
            <SItemDiv>
              <SItemImage src={item.image} />
              <SItemTitle>{item.title}</SItemTitle>
              <SItemAdress>{item.address}</SItemAdress>
              <SIconDiv onClick={() => handleDeleteItem(item)}>
                <BsFillTrashFill size={50} />
              </SIconDiv>
            </SItemDiv>
          );
        })}
      </SListDiv>
    </SLayout>
  );
};

export default React.memo(UserStyle);
