import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { setSearchText } from "../../slice/SearchDataSlice";
import { useDispatch } from "react-redux";

const SLayout = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SInput = styled.input`
  width: 80%;
  height: 60%;
  border-radius: 50px;
  padding-left: 20px;
  font-size: 20px;
  border: solid 1px lightgray;
  font-family: Arial, FontAwesome;
`;

const Search = () => {
  const dispatch = useDispatch();

  return (
    <SLayout>
      <SInput
        placeholder="&#xF002;"
        name="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          dispatch(setSearchText(event.currentTarget.value));
        }}
      />
    </SLayout>
  );
};

export default Search;
