import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import styled from "styled-components";
import LogoutNavbarElement from "./Data/Logout";
import LoginNavbarElement from "./Data/Login";

const NavBar = () => {
  const user = useSelector((state: any) => state.user);
  const NaviGate = useNavigate();

  const logoutHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.status === 200) {
        NaviGate("/login");
      } else {
        alert("로그아웃에 실패했습니다.");
      }
    });
  };

  return (
    <NavBarContainer>
      {user.userData && !user.userData.isAuth
        ? LogoutNavbarElement.map((item) => {
            return (
              <Item>
                <Link to={item.link}>{item.name}</Link>
              </Item>
            );
          })
        : LoginNavbarElement.map((item) => {
            return (
              <Item>
                <Link to={item.link}>{item.name}</Link>
              </Item>
            );
          })}
    </NavBarContainer>
  );
};

const NavBarContainer = styled.header`
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
  }
`;
const Item = styled.div``;
export default NavBar;
