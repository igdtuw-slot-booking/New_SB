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
//import Venue from "./pages/Venue/Venue.js";
import Calender from "./pages/Calender/Calender.jsx";
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />  
        {/* "^1"   eg. classname="title^1" */}                                    
        <Route path="/home" element={ <LandingPage/> } />
        {/* "^2"   eg. classname="title^2" */}    
        <Route path="loginadmin" element={<LoginAdmin/>}/>
        {/* "^3"   eg. classname="title^3" */}    
        <Route path='loginuser' element={<LoginUser/>}/>
        {/* "^4"   eg. classname="title^4" */}    
        <Route path='admin/:userId' element={<Pending/>}/>
        {/* "^5"   eg. classname="title^5" */}    
        <Route path='admin/:userId/approved' element={<Approved/>}/>
        {/* "^6"   eg. classname="title^6" */}    
        <Route path='admin/:userId/declined' element={<Declined/>}/>
        {/* "^7"   eg. classname="title^7" */}    
        <Route path="user/:userId" element={<User/>}/>
        {/* "^8"   eg. classname="title^8"*/}   
        <Route path="user/:userId/venue" element={<Venue/>}/>
        {/* "^9"   eg. classname="title^9" */}    
        <Route path="user/:userId/calender" element={<Calender/>}/> 
        {/* "^10"   eg. classname="title^10" */}    
      </Routes>
    </div>
  )
}