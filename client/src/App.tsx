import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import auth from "./hoc/auth";
import StartPage from "./Pages/StartPage/StartPage";
import NavBar from "./components/NavBar/NavBar";
import MyTravel from "./Pages/MyTravel/MyTravel";
import TravelCommunity from "./Pages/TravelCommunity/TravelCommunity";
import TravelSpotPage from "./Pages/TravelSpotPage/TravelSpotpage";
import TravelNews from "./Pages/TravelNews/TravelNews";
import Good from "./Pages/Good/Good";
import NorthHotSPot from "./Pages/TravelSpotPage/NorthHotSpotPage";
import SouthHotSpot from "./Pages/TravelSpotPage/SouthHotSpot";
import TravelDetail from "./Pages/TravelNews/TravelDetail/TravelDetail";
import Myschedule from "./Pages/MyTravel/MySchedule/Myschedule";
import MyscheduleDetail from "./Pages/MyTravel/MySchedule/MyscheduleDetail";
import CommunityUpdate from "./Pages/TravelCommunity/CommunityUpdate";
import CommunityDetail from "./Pages/TravelCommunity/CommunityDetail";
import UserTravelStyle from "./Pages/MyTravel/MyStyle/MylStyle";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

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

          <Route path="/register/" element={auth(RegisterPage, false)}></Route>
          <Route path="/login/" element={auth(LoginPage, false)}></Route>
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
