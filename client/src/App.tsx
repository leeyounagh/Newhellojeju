import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/landingPage/LandingPage";
import RegisterPage from "./Pages/registerpage/RegisterPage";
import LoginPage from "./Pages/loginPage/LoginPage";
import auth from "./hoc/auth";
import StartPage from "./Pages/startpage/StartPage";
import NavBar from "./components/header/NavBar";
import MyTravel from "./Pages/mytravel/MyTravel";
import TravelCommunity from "./Pages/travelcommunity/TravelCommunity";
import TravelSpotPage from "./Pages/travelspotpage/TravelSpotpage";
import TravelNews from "./Pages/travelnews/TravelNews";
import Good from "./Pages/good/Good";
import NorthHotSPot from "./Pages/travelspotpage/NorthHotSpotPage";
import SouthHotSpot from "./Pages/travelspotpage/SouthHotSpot";
import TravelDetail from "./Pages/traveldetail/TravelDetail";
import Myschedule from "./Pages/myschedule/Myschedule";
import MyscheduleDetail from "./Pages/myschedule/MyscheduleDetail";
import CommunityUpdate from "./Pages/travelcommunity/CommunityUpdate";
import CommunityDetail from "./Pages/travelcommunity/CommunityDetail";
import UserTravelStyle from "./Pages/mystyle/MylStyle";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state: any) => state.UserReducer);

  console.log(user);
  const Header = () => {
    if (window.location.pathname === "/") return null;
    return <NavBar />;
  };

  useEffect(() => {
    axios
      .get("/api/users/auth")
      .then((res) => console.log("확인", res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div>
        <Header></Header>

        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/southspot" element={<SouthHotSpot />} />
          <Route path="/northspot" element={<NorthHotSPot />} />
          <Route path="/landing" element={<LandingPage />} />

          <Route path="/travelnews" element={<TravelNews />} />
          <Route path="/mytravel" element={<MyTravel />} />
          <Route path="/community" element={<TravelCommunity />} />
          <Route
            path="/community/:productId"
            element={<CommunityDetail />}
          ></Route>
          <Route path="/travelspot" element={<TravelSpotPage />} />
          <Route path="/myschedule" element={<Myschedule />} />
          <Route path="/userstyle" element={<Good />} />

          <Route path="/usertravelstyle" element={<UserTravelStyle />}></Route>
          <Route path="/detail/:contentsId" element={<TravelDetail />}></Route>
          <Route path="/mytravel/:id" element={<MyscheduleDetail />}></Route>
          <Route path="/communityupdate" element={<CommunityUpdate />}></Route>

          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
