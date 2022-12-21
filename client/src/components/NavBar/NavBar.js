import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import "./NavBar.scss";

const LogoutNavbarElement = [
  {
    name: "Home",
    link: "/landing",
  },
  {
    name: "Register",
    link: "/register",
  },
  {
    name: "Login",
    link: "/login",
  },
];

const NavBar = (props) => {
  const user = useSelector((state) => state.user);
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

  const NavbarStyle = () => {
    if (user.userData && !user.userData.isAuth) {
      return LogoutNavbarElement.map((item) => {
        return (
          <>
            <Link to={item.link}>{item.name}</Link>
          </>
        );
      });
    } else {
      return (
        <>
          <Link to="/travelspot">TravelSpot</Link>

          <Link to="/travelnews">News</Link>

          <Link to="/community">community</Link>

          <Link to="/userstyle">
            <BsHeartFill></BsHeartFill>
          </Link>

          <Link to="/mytravel">MyTravel</Link>
          <Link to="/logout" onClick={logoutHandler}>
            logout
          </Link>
        </>
      );
    }
  };

  return (
    <>
      <NavbarStyle />
    </>
  );
};

export default NavBar;
