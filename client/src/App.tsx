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

function App() {
  const Header = () => {
    if (window.location.pathname === "/") return null;
    return <NavBar></NavBar>;
  };

  return (
    <div className="App">
      <div>
        <Header></Header>

        <Routes>
          <Route path="/" element={auth(StartPage, null)} />
          <Route path="/southspot" element={auth(SouthHotSpot, null)} />
          <Route path="/northspot" element={auth(NorthHotSPot, null)} />
          <Route path="/landing" element={auth(LandingPage, null)} />

          <Route path="/travelnews" element={auth(TravelNews, null)} />
          <Route path="/mytravel" element={auth(MyTravel, true)} />
          <Route path="/community" element={auth(TravelCommunity, true)} />
          <Route
            path="/community/:productId"
            element={auth(CommunityDetail, null)}
          ></Route>
          <Route path="/travelspot" element={auth(TravelSpotPage, true)} />
          <Route path="/myschedule" element={auth(Myschedule, true)} />
          <Route path="/userstyle" element={auth(Good, true)} />

          <Route
            path="/usertravelstyle"
            element={auth(UserTravelStyle, true)}
          ></Route>
          <Route
            path="/detail/:contentsId"
            element={auth(TravelDetail, null)}
          ></Route>
          <Route
            path="/mytravel/:id"
            element={auth(MyscheduleDetail, null)}
          ></Route>
          <Route
            path="/communityupdate"
            element={auth(CommunityUpdate, true)}
          ></Route>

          <Route path="/register" element={auth(RegisterPage, false)}></Route>
          <Route path="/login" element={auth(LoginPage, false)}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
