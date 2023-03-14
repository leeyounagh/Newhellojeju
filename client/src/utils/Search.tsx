import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

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
`;

const Search = () => {
  return (
    <SLayout>
      <SInput placeholder="Search" />
      <FaSearch style={{ marginLeft: "10px", cursor: "pointer" }} size={30} />
    </SLayout>
  );
};

export default Search;
