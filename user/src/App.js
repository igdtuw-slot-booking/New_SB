import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from "./pages/landingpage/landingpage.jsx";
import LoginAdmin from "./pages/loginadmin/loginadmin.jsx";
import LoginUser from "./pages/loginuser/loginuser.jsx";
import Pending from "./pages/Admin/AdminPending/Adminpending.jsx";
//import Admin from "./components/Admin/Admin.jsx";
import Approved from "./pages/Admin/AdminApproved/Adminapproved.jsx";
import Declined from "./pages/Admin/AdminDeclined/Admindeclined.jsx";
import User from "./pages/User/User.jsx";
import Venue from "./pages/Venue/Venue.jsx";
import Calender from "./pages/Calender/Calender.jsx";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/home" element={ <LandingPage/> } />
        <Route path="loginadmin" element={<LoginAdmin/>}/>
        <Route path='loginuser' element={<LoginUser/>}/>

        <Route path='admin/:userId' element={<Pending/>}/>
        <Route path='admin/:userId/approved' element={<Approved/>}/>
        <Route path='admin/:userId/declined' element={<Declined/>}/>
        <Route path="user/:userId" element={<User/>}/>
        <Route path="user/:userId/venue" element={<Venue/>}/>
        <Route path="user/:userId/calender" element={<Calender/>}/>

        
      </Routes>
    </div>
  )
}