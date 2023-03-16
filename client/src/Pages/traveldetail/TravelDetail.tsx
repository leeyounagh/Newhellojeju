import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GiCrownedHeart } from "react-icons/gi";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
const { REACT_APP_VisitJeju_KEY } = process.env;

const SLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: hidden;
  font-family: "Dovemayo_gothic";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.1/Dovemayo_gothic.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
    background: linear-gradient(#94b1b9,#89a6ae, white);
  z-index;1;
`;
const SImgDiv = styled.div`
  width: 50%;
  height: 100%;
`;
const SImg = styled.img`
  width: 100%;
  height: 100%;
`;
const SDescDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  opacity: 0.4;
  margin-top: 50px;
`;
const STitleDiv = styled.div`
  z-index: 10;
  color: white;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin-top: 100px;
  h1 {
    margin-bottom: 50px;
  }
`;
const SItemDiv = styled.div`
  z-index: 10;
  color: white;
  font-size: 20px;
  text-align: center;
  h3 {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
const STagDiv = styled.div`
  color: white;
  font-size: 20px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const SDescItemDiv = styled.div`
  color: white;
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  vertical-align: bottom;
`;
const SLineDiv = styled.div`
  border: 1px solid #94b1b9;
  width: 100%;
`;
const SBasicInfoDiv = styled.div`
  border: 1px solid #94b1b9;
  width: 60%;
  padding: 5px;
  margin-top: 50px;
`;
const SLineOuterDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const SIconDiv = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
const SDescInnerDiv = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;

const TravelDetail = () => {
  const user = useSelector((state: RootState) => state.UserReducer.user);
  const { contentsId } = useParams();
  const [newdata, setNewData] = useState<string[] | any[]>([]);
  const mainUrl = `http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${REACT_APP_VisitJeju_KEY}&locale=kr&cid=${contentsId}`;

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${mainUrl}`);
        const data = await response.data.items;
        setNewData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  const handleAddGood = async () => {
    const body = {
      contentsId: newdata[0].contentsid,
      image: newdata[0].repPhoto.photoid.imgpath,
      address: newdata[0].address,
      title: newdata[0].title,
    };
    try {
      const response = await axios.post("/api/users/addToGood", body);
      const status = await response.status;
      if (status === 200) {
        window.confirm("찜목록에 추가 되었습니다.");
      }
    } catch (err) {
      alert("실패했습니다.");
      console.log(err);
    }
  };
  return (
    <SLayout>
      <SImgDiv>
        <SImg src={newdata[0]?.repPhoto?.photoid?.imgpath} />
      </SImgDiv>
      <SDescDiv>
        <SDescInnerDiv>
          <STitleDiv>
            <h1>{newdata?.[0]?.title}</h1>
            <STagDiv>#{newdata?.[0]?.tag.replaceAll(",", "#")}</STagDiv>
            <SItemDiv>{newdata?.[0]?.introduction}</SItemDiv>
          </STitleDiv>

          <SBasicInfoDiv>
            <SDescItemDiv>
              <h2>기본정보</h2>
            </SDescItemDiv>
            <SLineOuterDiv>
              <SLineDiv />
            </SLineOuterDiv>

            <SItemDiv>
              <h3>주소</h3>
              {newdata?.[0]?.address}
            </SItemDiv>
            <SItemDiv>
              <h3>전화번호</h3>
              {newdata?.[0]?.phoneno}
            </SItemDiv>
          </SBasicInfoDiv>
          <SIconDiv>
            <SItemDiv>
              <h3>찜하기</h3>
              {/* 유저일때 아닐때 나눠서 */}
              {user?.[0]?.isAuth === true ? (
                <GiCrownedHeart
                  onClick={handleAddGood}
                  style={{ cursor: "pointer" }}
                  size={50}
                />
              ) : null}
            </SItemDiv>
          </SIconDiv>
        </SDescInnerDiv>
      </SDescDiv>
    </SLayout>
  );
};

export default TravelDetail;
