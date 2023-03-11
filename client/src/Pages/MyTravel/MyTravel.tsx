import React, { useEffect, useState } from "react";

import { BsCalendarPlusFill } from "react-icons/bs";

import MyscheduleDetail from "../myschedule/MyscheduleDetail";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeforschedule } from "../../_actions/User_action";

type Data = {
  title: string;
  style: string;
  startDate: string;
  endDate: string;
  id: string;
};

const MyTravelUpdate = (props: any) => {
  let dispatch = useDispatch();

  useEffect(() => {
    listHandler();

    <BsFillTrashFill></BsFillTrashFill>;
  }, []);
  const removeHandler = (scheduleId: string) => {
    try {
      dispatch(removeforschedule(scheduleId));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    list();
  }, [removeHandler]);

  const list = () => {
    if (props.user.userData && props.user.userData.schedule) {
      <MyscheduleDetail schedule={props.user.userData.schedule} />;
      return props.user.userData.schedule.map((item: Data, index: number) => {
        return (
          <div
            key={index}
            style={{
              marginRight: "10px",
              border: "1px solid #94b1b9",
              width: "200px",
              background: "#f4f4f4",
              borderRadius: "10px",
              flexDirection: "column",
              overflow: "auto",
            }}
          >
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h4 style={{ textAlign: "center" }}>여행제목:{item.title} </h4>
            </div>

            <div
              style={{
                marginTop: "3px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              여행스타일:{item.style}
            </div>
            <div
              style={{
                marginTop: "3px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              출발일:
              {item.startDate.substr(0, 10) === null ? (
                <div>none</div>
              ) : (
                item.startDate.substr(0, 10)
              )}
            </div>
            <div
              style={{
                marginTop: "3px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              돌아가는날:
              {item.endDate.substr(0, 10) === null ? (
                <div>none</div>
              ) : (
                item.endDate.substr(0, 10)
              )}
            </div>
            <div
              style={{
                marginTop: "3px",
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
                color: "black",
              }}
            >
              <a style={{ color: "black" }} href={`/mytravel/${item.id}`}>
                자세히 보기..
              </a>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                marginBottom: "10px",
                color: "black",
              }}
            >
              <button
                className="mytravel_btn"
                style={{
                  border: "none",
                  background: "white",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
                type="submit"
                onClick={() => {
                  removeHandler(item.id);
                }}
              >
                일정삭제
              </button>
            </div>
          </div>
        );
      });
    }
  };

  const userDetail = () => {
    if (props.user.userData) {
      return (
        <div>
          <h2 style={{ position: "absolute", top: "20px", left: "260px" }}>
            {props.user.userData.name}님의 제주여행
          </h2>
          {props.user.userData.UserStyle.length === 0 ? (
            <div
              style={{
                position: "relative",
                top: "60px",
                left: "45px",
                fontSize: "12px",
              }}
            >
              <a style={{ color: "black" }} href="/usertravelstyle">
                <h3>UserStyle설정하러가기</h3>
              </a>
            </div>
          ) : (
            <div
              style={{
                position: "relative",
                top: "60px",
                left: "45px",
                fontSize: "12px",
              }}
            >
              <h3>
                UserStyle:
                {
                  props.user.userData.UserStyle[
                    props.user.userData.UserStyle.length - 1
                  ]
                }
              </h3>{" "}
            </div>
          )}

          <div
            style={{
              position: "relative",
              top: "80px",
              left: "45px",
              fontSize: "12px",
            }}
          >
            <h3>이메일:{props.user.userData.email}</h3>
          </div>
        </div>
      );
    }
  };

  const goodlist = () => {
    if (props.user.userData && props.user.userData.good) {
      return (
        <div>
          <div>
            <div
              style={{
                marginRight: "10px",
                fontSize: "12px",
                position: "absolute",
                top: "-50px",
                left: "-10px",
                whiteSpace: "nowrap",
              }}
            >
              <h3>찜리스트</h3>{" "}
            </div>

            <a
              href="/userstyle"
              style={{
                color: "#f58d9c",
                fontSize: "12px",
                position: "absolute",
                top: "-50px",
                left: "58px",
              }}
            >
              <h3>{props.user.userData.good.length}</h3>
            </a>
          </div>
        </div>
      );
    }
  };

  const listHandler = () => {
    if (props.user.userData && props.user.userData.schedule) {
      if (props.user.userData.schedule.length > 0) {
        return (
          <div
            style={{
              position: "absolute",
              top: "330px",
              left: "280px",
              display: "flex",
              width: "700px",
            }}
          >
            {list()}
          </div>
        );
      } else {
        return (
          <div
            style={{
              position: "absolute",
              top: "340px",
              left: "290px",
              display: "flex",
            }}
          >
            <h3>등록된 일정이 없습니다.</h3>
          </div>
        );
      }
    }
  };
  return (
    <div className="travelDetail1" style={{ height: "750px" }}>
      <div
        style={{
          border: "1px solid lightgray",
          width: "700px",
          height: "160px",
          position: "absolute",
          top: "100px",
          left: "280px",
          background: "#f4f4f4",
          borderRadius: "10px",
        }}
      >
        {/* <div> <h2 style={{position:'absolute', top:'20px',left:'320px'}}> My Travel</h2></div> */}
        <div>
          <div>{userDetail()}</div>

          <span>
            <div style={{ position: "absolute", top: "110px", left: "550px" }}>
              {goodlist()}
            </div>
            <div
              style={{
                position: "absolute",
                top: "100px",
                left: "540px",
                display: "flex",
              }}
            >
              <div style={{ fontSize: "12px" }}>
                <h3>나의 일정</h3>{" "}
              </div>
              <div>
                <a
                  href="/myschedule"
                  style={{ width: "30px", marginLeft: "15px", color: "black" }}
                >
                  <BsCalendarPlusFill
                    style={{ width: "15px", height: "15px" }}
                  ></BsCalendarPlusFill>
                </a>{" "}
              </div>
            </div>
          </span>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "290px",
          left: "290px",
          width: "900px",
        }}
      >
        <h3>나의 일정 리스트</h3>
      </div>

      {props.user.userData && props.user.userData.UserStyle.length > 0 ? (
        <a href="/usertravelstyle">
          {" "}
          <div
            style={{
              position: "absolute",
              top: "290px",
              left: "780px",
              width: "900px",
            }}
          >
            <h4 style={{ color: "black" }}>userStyle 다시 설정하러 가기</h4>
          </div>
        </a>
      ) : null}

      <div style={{ position: "absolute", top: "290px", left: "290px" }}>
        <h3>나의 일정 리스트</h3>
      </div>

      {listHandler()}
    </div>
  );
};

export default React.memo(MyTravelUpdate);
