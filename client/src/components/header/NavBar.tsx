import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoutNavbarElement from "../../data/Logout";
import LoginNavbarElement from "../../data/Login";
import AxiosInstance from "../../data/AxiosInstance";
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
const Item = styled.div`
  z-index: 600;
`;

const NavBar = () => {
  const user = useSelector((state: any) => state.user);
  const NaviGate = useNavigate();

  const logoutHandler = () => {
    AxiosInstance.get("/users/logout").then((response) => {
      console.log(response);
      // if (response.status === 200) {
      //   NaviGate("/login");
      // } else {
      //   alert("로그아웃에 실패했습니다.");
      // }
    });
  };

  return (
    <SLayout>
      {/* {user.userData && !user.userData.isAuth
        ? LogoutNavbarElement.map((item) => {
            return (
              <Link to={item.link}>
                <Item>{item.name}</Item>
              </Link>
            );
          })
        : LoginNavbarElement.map((item) => {
            return (
              <Item>
                <Link to={item.link}>{item.name}</Link>
              </Item>
            );
          })} */}
      {LogoutNavbarElement.map((item) => {
        return (
          <div>
            <Item>
              <Link to={item.link}>{item.name}</Link>
            </Item>
          </div>
        );
      })}
      <Item onClick={logoutHandler}>Logout</Item>
    </SLayout>
  );
};

export default NavBar;
