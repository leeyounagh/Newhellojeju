import React, { useState, useRef, useReducer, useEffect } from "react";

import { Input } from "antd";
import { Collapse } from "antd";
import { Checkbox } from "antd";
import { Radio, RadioChangeEvent } from "antd";
const { Panel } = Collapse;

const reducer = (state, action) => {
  console.log("리듀서 확인", state, action);
};

const RadioBox = (props) => {
  const [checked, setchecked] = useState([]);

  const handleToggle = (e) => {
    //전체 checked된 state에서 전체누른 checkbox가 이미 있다면
    const newChecked = [...checked];

    newChecked.unshift(e.target.value);
    setchecked(newChecked);
    props.handleFilters(newChecked);
    console.log("확인", checked);
  };

  return (
    <div className="travel_font">
      <span style={{ position: "absolute", top: "270px", left: "200px" }}>
        {props.data &&
          props.data.map((item) => {
            return (
              <span key={item.id}>
                <span>
                  <label value={item.id} style={{ marginRight: "10px" }}>
                    {" "}
                    <input
                      onChange={(e) => {
                        handleToggle(e);
                      }}
                      type="radio"
                      name="content"
                      value={item.id}
                    />
                    {item.area}
                  </label>
                </span>
              </span>
            );
          })}
      </span>
    </div>
  );
};

export default RadioBox;
