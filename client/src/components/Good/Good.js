import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./Good.scss";
import { removeFromgood } from "../../_actions/User_action";

import { HiTrash } from "react-icons/hi";
const UserStyle = (props) => {
  let dispatch = useDispatch();

  useEffect(() => {
    test();
  }, []);

  let removeHandler = (contentsId) => {
    console.log(contentsId);
    dispatch(removeFromgood(contentsId)).catch((err) => console.log(err));
  };
  const test = () => {
    if (props.user.userData && props.user.userData.good) {
      return props.user.userData.good.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              marginTop: "20px",
              height: "80px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div>
              <a href={`/detail/${item.id}`}>
                <img
                  alt={item.title}
                  src={item.image}
                  width="70px"
                  height="70px"
                  style={{ borderRadius: "50px", margin: "25px" }}
                ></img>
              </a>
            </div>
            <div
              style={{
                width: "100px",
                height: "50px",
                marginTop: "45px",
                marginBottom: "45px",
                whiteSpace: "nowrap",
              }}
            >
              <h4>{item.title}</h4>
            </div>
            <div
              style={{
                width: "300px",
                height: "100px",
                top: "20px",
                whiteSpace: "nowrap",
                marginTop: "45px",
                marginBottom: "45px",
              }}
            >
              <h4>{item.address}</h4>
            </div>
            <div>
              <HiTrash
                onClick={() => removeHandler(item.id)}
                style={{
                  width: "30px",
                  height: "40px",
                  cursor: "pointer",
                  marginTop: "35px",
                  marginBottom: "35px",
                }}
              >
                삭제
              </HiTrash>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="userstyle_body">
      <div
        style={{
          position: "relative",
          marginTop: "20px",
          top: "100px",
          left: "50%",
          display: "flex",
          textAlign: "center",
          fontSize: "20px",
        }}
        className="goodDetail"
      >
        <h3>찜 리스트</h3>
      </div>
      <div
        className="goodDetail"
        style={{
          position: "relative",
          marginTop: "20px",
          top: "50px",
          left: "27%",
          width: "600px",
        }}
      >
        {test()}
      </div>
    </div>
  );
};

export default React.memo(UserStyle);
