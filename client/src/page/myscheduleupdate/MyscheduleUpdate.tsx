import React, { useState, CSSProperties } from "react";
import styled from "styled-components";
import Btn1 from "../../components/button/Btn1";
import { v4 } from "uuid";
import { DayPicker, DateRange } from "react-day-picker";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "react-day-picker/dist/style.css";
import axios from "axios";

const SLayout = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SBoardDiv = styled.div`
  border: 1px solid lightgray;
  width: 50%;
  height: 90%;
  background: #daeaf1;
`;
const SCalendatDiv = styled.div`
  width: 40%;
  height: 80%;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SUpdateDiv = styled.div`
  width: 40%;
  height: 80%;
`;
const STitleDiv = styled.div`
  width: 100%;
  height: 10%;
  padding-left: 30px;
  font-size: 1.3rem;
`;
const SInput = styled.input`
  width: 80%;
  height: 100%;
  margin-left: 10px;
  font-size: 1.3rem;
  border: none;
  padding-left: 10px;
  border-bottom: 2px solid lightgray;
`;
const STextAreaDiv = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 30px;
`;
const STextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  padding: 20px 20px 20px 20px;
  font-size: 1.5rem;
`;
const SBtnDiv = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SSubmitDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
`;
const SItemDiv = styled.div`
  width: 100%;
  height: 85%;
  background: #daeaf1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SDatePicker = styled(DayPicker)`
  background: white;
  padding: 10px 10px 10px 10px;
`;
type StylesType = {
  [key: string]: CSSProperties;
};
const styles: StylesType = {
  container: { width: "50%", height: "50%" },
};

const MyscheduleUpdate = () => {
  const user = useSelector((state: RootState) => state.UserReducer.user);
  const [range, setRange] = useState<DateRange | undefined>();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }

  const onSubmitHandler = async () => {
    const body = {
      writer: user[0]._id,
      title: title,
      desc: desc,
      startDate: range?.from,
      endDate: range?.to,
      id: v4(),
    };
    try {
      const response = await axios.post("/api/users/addschedule", body);
      const data = response.data;
      if (data.success) {
        alert("스케쥴 업로드 성공했습니다.");
        window.location.reload();
      }
    } catch (err) {
      if (err) {
        alert("스케쥴 업로드  실패했습니다.");
      }
    }
  };

  return (
    <SLayout>
      <SBoardDiv>
        <SItemDiv>
          <SCalendatDiv>
            <SDatePicker
              styles={styles}
              defaultMonth={new Date()}
              mode="range"
              min={3}
              max={6}
              selected={range}
              onSelect={setRange}
              footer={footer}
            />
          </SCalendatDiv>
          <SUpdateDiv>
            <STitleDiv>
              제목:
              <SInput
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </STitleDiv>
            <STextAreaDiv>
              <STextArea
                onChange={(event) => {
                  setDesc(event.target.value);
                }}
              />
            </STextAreaDiv>
          </SUpdateDiv>
        </SItemDiv>

        <SSubmitDiv>
          <SBtnDiv
            onClick={() => {
              onSubmitHandler();
            }}
          >
            <Btn1 title="등록하기" />
          </SBtnDiv>
        </SSubmitDiv>
      </SBoardDiv>
    </SLayout>
  );
};

export default MyscheduleUpdate;
