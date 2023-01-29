import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import auth from "./hoc/auth";
import StartPage from "./components/StartPage/StartPage";
import NavBar from "./components/NavBar/NavBar";
import MyTravel from "./components/MyTravel/MyTravel";
import TravelCommunity from "./components/TravelCommunity/TravelCommunity";
import TravelSpotPage from "./components/TravelSpotPage/TravelSpotpage";
import TravelNews from "./components/TravelNews/TravelNews";
import Good from "./components/Good/Good";
import NorthHotSPot from "./components/TravelSpotPage/NorthHotSpotPage";
import SouthHotSpot from "./components/TravelSpotPage/SouthHotSpot";
import TravelDetail from "./components/TravelNews/TravelDetail/TravelDetail";
import Myschedule from "./components/MyTravel/MySchedule/Myschedule";
import MyscheduleDetail from "./components/MyTravel/MySchedule/MyscheduleDetail";
import CommunityUpdate from "./components/TravelCommunity/CommunityUpdate";
import CommunityDetail from "./components/TravelCommunity/CommunityDetail";
import UserTravelStyle from "./components/MyTravel/MyStyle/MylStyle";
import Footer from "./components/Footer/Footer";

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
          <Route exact path="/" element={auth(StartPage, null)} />
          <Route exact path="/southspot" element={auth(SouthHotSpot, null)} />
          <Route exact path="/northspot" element={auth(NorthHotSPot, null)} />
          <Route exact path="/landing" element={auth(LandingPage, null)} />

          <Route exact path="/travelnews" element={auth(TravelNews, null)} />
          <Route exact path="/mytravel" element={auth(MyTravel, true)} />
          <Route
            exact
            path="/community"
            element={auth(TravelCommunity, true)}
          />
          <Route
            exact
            path="/community/:productId"
            element={auth(CommunityDetail, null)}
          ></Route>
          <Route
            exact
            path="/travelspot"
            element={auth(TravelSpotPage, true)}
          />
          <Route exact path="/myschedule" element={auth(Myschedule, true)} />
          <Route exact path="/userstyle" element={auth(Good, true)} />

          <Route
            exact
            path="/usertravelstyle"
            element={auth(UserTravelStyle, true)}
          ></Route>
          <Route
            exact
            path="/detail/:contentsId"
            element={auth(TravelDetail, null)}
          ></Route>
          <Route
            exact
            path="/mytravel/:id"
            element={auth(MyscheduleDetail, null)}
          ></Route>
          <Route
            exact
            path="/communityupdate"
            element={auth(CommunityUpdate, true)}
          ></Route>

          <Route
            exact
            path="/register/"
            element={auth(RegisterPage, false)}
          ></Route>
          <Route exact path="/login/" element={auth(LoginPage, false)}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
