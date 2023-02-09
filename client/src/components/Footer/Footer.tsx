import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <FooterContainer>푸터</FooterContainer>;
};

const FooterContainer = styled.footer`
  width: 100vw;
  height: 10vh;
  background-color: #94b1b9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 900;
  color: #f3efe6;
  font-size: 1.8rem;
`;
export default Footer;
