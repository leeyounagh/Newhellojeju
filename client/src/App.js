
import './App.css';
import {Routes,Route, Router, BrowserRouter} from'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage'
import auth from './hoc/auth';
import StartPage from './components/StartPage/StartPage';
import NavBar from './components/NavBar/NavBar';
import MyTravelUpdate from './components/MyTravelUpdate/MyTravelUpdate';
import TravelCommunity from './components/TravelCommunity/TravelCommunity';
import TravelSpotPage from './components/TravelSpotPage/TravelSpotpage';
import TravelNews from './components/TravelNews/TravelNews';
import UserStyle from './components/UserStyle/UserStyle';
import NorthHotSPot from './components/TravelSpotPage/NorthHotSpotPage';
import SouthHotSpot from './components/TravelSpotPage/SouthHotSpot';
import TravelDetail from './components/TravelDetail/TravelDetail';
import Myschedule from './components/MyTravelUpdate/Myschedule';
import MyscheduleDetail from './components/MyTravelUpdate/MyscheduleDetail';
import CommunityUpdate from './components/TravelCommunity/CommunityUpdate';
import CommunityDetail from './components/TravelCommunity/CommunityDetail';
import UserTravelStyle from './components/MyTravelUpdate/UserStyle/UserTravelStyle'
import LandingFooter from './components/LandingPage/LandingMain/LandingFooter';
import { BrowserView, MobileView } from 'react-device-detect';
import MobilePage from './components/MobilePage';
function App() {
  const Header = () => {
    if (window.location.pathname === '/') return null;
      return (
        <NavBar></NavBar>
      );
  }

  return (
    <div className="App" >
   
      <div>
        <MobileView>
          <MobilePage></MobilePage>
        </MobileView>
        <BrowserView>
        <Header></Header>
      {/* <NavBar></NavBar> */}
       
       <Routes>
   
         <Route exact path ="/" element={auth(StartPage,null)}/>
         <Route exact path ="/southspot" element={auth(SouthHotSpot,null)}/>
         <Route exact path ="/northspot" element={auth(NorthHotSPot,null)}/>
         <Route exact path ="/landing" element={auth(LandingPage,null)}/>
         <Route exact path ="/travelnews" element={auth(TravelNews,null)}/>
         <Route exact path ="/mytravel" element={auth(MyTravelUpdate,true)}/>
         <Route exact path ="/community" element={auth(TravelCommunity,true)}/>
         <Route exact path='/community/:productId' element={auth(CommunityDetail,null)}></Route>
         <Route exact path ="/travelspot" element={auth(TravelSpotPage,true)}/>
         <Route exact path ="/myschedule" element={auth(Myschedule,true)}/>
         <Route exact path ="/userstyle" element={auth(UserStyle,true)}/>
        
         <Route exact path='/usertravelstyle' element={auth(UserTravelStyle,true)}></Route>
         <Route exact path='/detail/:contentsId' element={auth(TravelDetail,null)}></Route>
         <Route exact path='/mytravel/:id' element={auth(MyscheduleDetail,true)}></Route>
         <Route exact path='/communityupdate' element={auth(CommunityUpdate,true)}></Route>
     
         <Route exact path='/register/' element={auth(RegisterPage,false)}>
       
      
         </Route>
        <Route exact path='/login/' element={auth(LoginPage,false)}></Route>
    
        

          
         
        </Routes>
        </BrowserView>
    
      
    
     
        
      </div>
   
   
    </div>
  );
}


export default App;
