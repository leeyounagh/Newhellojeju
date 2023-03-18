import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../../utils/PageNation";
import { GrNext, GrPrevious } from "react-icons/gr";

type Latest = {
  Communutytitle: string;
  _id: string;
  images: string[];
};

type List = {
  Communutytitle: string;
  _id: string;
  images: string[];
  writer: any;
};

const TravelCommunity = () => {
  const [letter, Setletter] = useState([]);
  const [Skip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [position, setPosition] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const offset: number = (page - 1) * limit; //페이지 처음시작하는 인덱스번호
  const [imgPage, setImgPage] = useState<number>(1);
  let [style, setStyle] = useState("");
  let [Search, setSearch] = useState("");
  const totalImglength: number = 150 * letter.length;

  useEffect(() => {
    let body = {
      Skip: Skip,
      limit: limit,
    };

    getProduct(body);
  }, []);

  const getProduct = (body: object) => {
    axios.post("/api/users/addcommunity/letter", body).then((response) => {
      if (response.data.success) {
        console.log(response.data);

        Setletter(response.data.productInfo.reverse());
      } else {
        alert("글을 가져오는데 실패했습니다.");
      }
    });
  };

  return <div className="commununity_font">dsfadf</div>;
};

export default TravelCommunity;
