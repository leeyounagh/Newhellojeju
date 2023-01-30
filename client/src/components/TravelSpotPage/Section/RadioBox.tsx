import React, { useState } from "react";

const RadioBox = (props: any) => {
  const [checked, setchecked] = useState<string[]>([]);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    //전체 checked된 state에서 전체누른 checkbox가 이미 있다면
    const newChecked = [...checked];

    newChecked.unshift(event.target.value);
    setchecked(newChecked);
    props.handleFilters(newChecked);
  };

  return (
    <div className="travel_font">
      <span style={{ position: "absolute", top: "270px", left: "200px" }}>
        {props.data &&
          props.data.map((item: any) => {
            return (
              <span key={item.id}>
                <span>
                  <label>
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
