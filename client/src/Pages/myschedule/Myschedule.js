import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
// import { v4 } from "uuid";

const Myschedule = (props) => {
  // const id = 0;

  // let [title, setTitle] = useState("");
  // let [style, setStyle] = useState("");
  // let [desc, setDesc] = useState("");
  // const dispatch = useDispatch();
  // const NaviGate = useNavigate();
  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: null,
  //     key: "selection",
  //   },
  // ]);
  // const uuid = generator.uuid();
  // console.log(uuid); // 3270411116609537
  // console.log(v4());

  // console.log(state[0].startDate);
  // const titleHandler = (event) => {
  //   setTitle(event.currentTarget.value);
  //   console.log(title);
  // };
  // const selectedHandler = (event) => {
  //   setStyle(event.currentTarget.value);
  //   console.log(style);
  // };
  // const descdHandler = (event) => {
  //   setDesc(event.currentTarget.value);
  //   console.log(desc);
  // };
  // const onsubmitHandler = (event) => {
  //   console.log(props.user.userData);
  //   if (!title || !style || !desc) {
  //     return alert("모든값을 넣어주셔야됩니다.");
  //   }
  //   const body = {
  //     writer: props.user.userData._id,
  //     title: title,
  //     desc: desc,
  //     style: style,
  //     startDate: state[0].startDate,
  //     endDate: state[0].endDate,
  //     id: v4(),
  //   };

  //   NaviGate("/mytravel");
  // };

  return (
    <div className="schedule travelDetail1" style={{ height: "550px" }}></div>
  );
};

export default React.memo(Myschedule);
