import React from "react";
import styled from "styled-components";

const SLayout = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 30vh;
`;

const Recomendation = () => {
  return <SLayout></SLayout>;
};

export default React.forwardRef(Recomendation);
