import React, { useEffect } from "react";
import axios from "axios";

import LandingMain from "./LandingMain/LandingMain";

import LandingMiddle from "./LandingMain/LandingMiddle";
import LandingBottom from "./LandingMain/LandingBottom";
import LandingFooter from "./LandingMain/LandingFooter";

const LandingPage = (props) => {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);

  const LandingFooterHandler = () => {
    if (props.user.userData) {
      return (
        <div>
          <LandingFooter userdata={props.user.userData}></LandingFooter>
        </div>
      );
    }
  };

  return (
    <div style={{ overflowX: "none" }}>
      <LandingMain></LandingMain>

      <LandingMiddle></LandingMiddle>
      <LandingBottom></LandingBottom>
      {LandingFooterHandler()}
    </div>
  );
};

export default LandingPage;
