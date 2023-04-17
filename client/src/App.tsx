import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./page/landing/LandingPage";
import RegisterPage from "./page/registerpage/RegisterPage";
import LoginPage from "./page/login/LoginPage";
import StartPage from "./page/startpage/StartPage";
import NavBar from "./components/header/NavBar";
import MyTravel from "./page/mytravel/MyTravel";
import TravelCommunity from "./page/travelcommunity/TravelCommunity";
import TravelSpotPage from "./page/travelspotpage/TravelSpotpage";
import TravelNews from "./page/travelnews/TravelNews";
import Good from "./page/good/Good";
import NorthHotSPot from "./page/northhotspot/NorthHotSpotPage";
import SouthHotSpot from "./page/southhotspot/SouthHotSpotPage";
import TravelDetail from "./page/traveldetail/TravelDetail";
import Myschedule from "./page/myscheduleupdate/MyscheduleUpdate";
import MyscheduleDetail from "./page/myscheduledetail/MyscheduleDetail";
import CommunityUpdate from "./page/communityupdate/CommunityUpdate";
import CommunityDetail from "./page/communitydetail/CommunityDetail";
import { setUserInformation } from "./slice/UserSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const Header = () => {
    if (window.location.pathname === "/") {
      return null;
    } else {
      return <NavBar />;
    }
  };

  useEffect(() => {
    getAuth();
    async function getAuth() {
      try {
        let response = await axios.get("/api/users/auth");
        let data = await response.data;

        dispatch(setUserInformation(data));
      } catch (err) {
        console.log(err);
      }
    }
    Header();
  }, []);

  return (
    <div className="App">
      <div>
        <Header></Header>

        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/travelspot" element={<TravelSpotPage />} />
          <Route path="/southspot" element={<SouthHotSpot />} />
          <Route path="/northspot" element={<NorthHotSPot />} />
          <Route
            path="/travelspot/:contentsId"
            element={<TravelDetail />}
          ></Route>

          <Route path="/travelnews" element={<TravelNews />} />

          <Route path="/community" element={<TravelCommunity />} />
          <Route
            path="/community/:productId"
            element={<CommunityDetail />}
          ></Route>

          <Route path="/myschedule" element={<Myschedule />} />
          <Route path="/userstyle" element={<Good />} />

          <Route path="/mytravel" element={<MyTravel />} />
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
