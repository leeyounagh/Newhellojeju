import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoutNavbarElement from "../../data/Logout";
import LoginNavbarElement from "../../data/Login";
import { RootState } from "../../store/store";

const SLayout = styled.header`
  width: 100vw;
  height: 10vh;
  position: fixed;
  top: 0px;
  background-color: #94b1b9;
  z-index: 500;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 900;
  a {
    color: #f3efe6;
    text-decoration: none;
    font-size: 1.8rem;
    z-index: 800;
  }
`;
const SItem = styled.div`
  z-index: 600;
  color: #f3efe6;
  text-decoration: none;
  font-size: 1.8rem;
  z-index: 800;
  cursor: pointer;
`;
const SInnerDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

const NavBar = () => {
  const user = useSelector((state: RootState) => state.UserReducer.user);

  const NaviGate = useNavigate();

  const logoutHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.status === 200) {
        NaviGate("/login");
        window.location.reload();
      } else {
        alert("로그아웃에 실패했습니다.");
      }
    });
  };

  return (
    <SLayout>
      <SInnerDiv>
        {user?.[0]?.isAuth === true ? (
          <>
            {LoginNavbarElement.map((item) => {
              return (
                <Link to={item.link}>
                  <SItem>{item.name}</SItem>
                </Link>
              );
            })}
            <SItem onClick={() => logoutHandler()}>Logout</SItem>
          </>
        ) : (
          LogoutNavbarElement.map((item) => {
            return (
              <SItem>
                <Link to={item.link}>{item.name}</Link>
              </SItem>
            );
          })
        )}
      </SInnerDiv>
    </SLayout>
  );
};

export default NavBar;
