import axios from "axios";
import { Card, Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import "./NorthHotSpot.scss";
import RadioBox from "./Section/RadioBox";
import { jejuSection } from "./Section/data";

import { FaArrowAltCircleUp } from "react-icons/fa";

const mainUrl = `http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr`;

const { Meta } = Card;

const NorthHotSpotPage = () => {
  const [loading, setLoading] = useState(false);
  const [filterArr, setFilterArr] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [contents, setContents] = useState("c5");

  useEffect(() => {
    axiosData();
  }, [contents]);
  useEffect(() => {
    axiosData();
  }, [page]);

  const axiosData = async () => {
    setLoading(true);

    let urlPage = `&page=${page}`;
    let contentsPage = `&category=${contents}`;
    try {
      await axios
        .get(`${mainUrl}${urlPage}${contentsPage}`)
        .then((response) => {
          filter(response.data.items);
        });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  function filter(arr: string[]) {
    let i = 0;
    let newdata: any[] = [];
    let copy: string[] = [];
    newdata = Array.from(arr);

    while (i < newdata.length) {
      if (newdata[i].region1cd.label === "제주시") {
        copy.unshift(newdata[i]);
      }

      i++;
    }

    return setFilterArr((oldphotos) => {
      return [...copy, ...oldphotos];
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", event);

    return () => window.removeEventListener("scroll", event);
  }, [loading]);

  const event = () => {
    if (
      !loading &&
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 500
    ) {
      setLoading(true);

      setPage((oldPage) => {
        return oldPage + 1;
      });
    }
  };
  const showFilterResults = (filters: any) => {
    // filter =>1이면 관광지만
    //filter =>2면 맛집만
    setContents("");

    console.log("안녕", filters[0], contents);
    if (Number(filters[0]) === 1) {
      setContents("");
      let copy: any[] = [];

      setContents("c1");
      setFilterArr([...copy]);
      setPage(1);
    } else if (Number(filters[0]) === 2) {
      setContents("");
      let copy: never[] = [];
      setContents("c2");
      setFilterArr([...copy]);
      setPage(1);
    } else if (Number(filters[0]) === 3) {
      let copy: never[] = [];
      setContents("");
      setFilterArr([...copy]);
      setContents("c3");
      setPage(1);
    } else if (Number(filters[0]) === 4) {
      let copy: never[] = [];
      setContents("");
      setFilterArr([...copy]);
      setContents("c4");
      setPage(1);
    }
  };

  const handleFilters = (filters: any) => {
    showFilterResults({ ...filters });
  };

  const scrollTop = () => {
    return window.scrollTo(0, 0);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  //제주시
  return (
    <div>
      <div
        className="travel_font"
        style={{ position: "absolute", top: "150px", left: "600px" }}
      >
        <h1 className="nav_text">제주시</h1>
      </div>

      <div>
        <RadioBox
          data={jejuSection}
          handleFilters={(filters: any) => handleFilters(filters)}
        ></RadioBox>
      </div>
      <div>
        <span>
          <span>
            <input
              className="card_name"
              style={{
                position: "relative",
                left: "850px",
                top: "270px",
                width: "150px",
                height: "25px",
                borderRadius: "25px",
                paddingLeft: "5px",
                paddingTop: "3px",
                fontSize: "15px",
              }}
              type="text"
              placeholder="🍳"
              onChange={(e) => {
                onChangeSearch(e);
              }}
            ></input>
          </span>
        </span>
      </div>

      {/* <div style={{ position: "absolute", top: "400px", left: "200px" }}>
        <Row>
          {test.filter((val: any) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item, i) => {
              return (
                <div
                  key={i}
                  style={{ marginRight: "50px", marginBottom: "50px" }}
                >
                  <Col lg={12} sm={24} key={item.contentsid}>
                    <Card
                      className="card_name"
                      hoverable
                      style={{ width: 240, height: 250 }}
                      cover={
                        <a href={`/detail/${item.contentsid}`}>
                          <img
                            width="240px"
                            height="150px"
                            alt="example"
                            src={item.repPhoto.photoid.thumbnailpath}
                          />
                        </a>
                      }
                    >
                      <Meta
                        title={item.title}
                        description={item.repPhoto.descseo}
                      />
                    </Card>
                  </Col>
                </div>
              );
            })}
        </Row>
      </div> */}
      <div
        className="heart_all"
        style={{
          position: "fixed",
          marginTop: "100px",
          left: "1050px",

          width: "100px",
          height: "500px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "400px",
            left: "30px",
            zIndex: "300",
          }}
        >
          <FaArrowAltCircleUp
            style={{ width: "30px", height: "30px" }}
            onClick={scrollTop}
          ></FaArrowAltCircleUp>
        </div>

        <div className="heart-box">
          <div style={{ height: "500px" }} className="heart">
            <svg
              width="80"
              height="80"
              viewBox="0 0 800 700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
            </svg>
          </div>
          <div className="heart">
            <svg
              width="70"
              height="70"
              viewBox="0 0 800 700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
            </svg>
          </div>
          <div className="heart">
            <svg
              width="68"
              height="68"
              viewBox="0 0 800 700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NorthHotSpotPage);
