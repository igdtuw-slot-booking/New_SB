import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from "./pages/landingpage/landingpage.jsx";
import LoginAdmin from "./pages/loginadmin/loginadmin.jsx";
import LoginUser from "./pages/loginuser/loginuser.jsx";
import Pending from "./pages/Admin/AdminPending/Adminpending.jsx";
import Admin from "./components/Admin/Admin.jsx";
import Approved from "./pages/Admin/AdminApproved/Adminapproved.jsx";
import Declined from "./pages/Admin/AdminDeclined/Admindeclined.jsx";
import RegisterAdmin from './pages/registerAdmin/registerAdmin.jsx';
import RegisterUser from "./pages/registerUser/registerUser.jsx";
import UserPending from "./pages/User/Userpending/UserPending.jsx";
import UserApproved from "./pages/User/Userapproved/UserApproved.jsx";
import UserCancelled from "./pages/User/Usercancelled/UserCancelled.jsx";
import UserDeclined from "./pages/User/Userdeclined/UserDeclined.jsx";
import Venue from "./pages/Venue/Venue.js";
import Calender from "./pages/Calender/Calender.jsx";
import { Routes, Route } from "react-router-dom";

import Booking from "./pages/Booking/Booking.js";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />                                     
        <Route path="/loginadmin" element={<LoginAdmin/>}/>  
        <Route path='/loginuser' element={<LoginUser/>}/>    
        <Route path='/registeruser' element={<RegisterUser/>}/>  
        <Route path='/admin' element={<Pending/>}/>  
        <Route path='/admin/approved' element={<Approved/>}/>    
        <Route path='/admin/:userId/declined' element={<Declined/>}/>    
        <Route path="/user" element={<UserPending/>}/>
        
        <Route path="/user/:userId/approved" element={<UserApproved/>}/>
        <Route path="/user/:userId/declined" element={<UserDeclined/>}/>
        <Route path="/user/:userId/cancelled" element={<UserCancelled/>}/>   
        <Route path="/user/:userId/venue" element={<Venue/>}/>  
        <Route path="/user/:userId/calender" element={<Calender/>}/>   
        <Route path="/user/:userId/booking" element={<Booking/>}/>
      </Routes>
    </div>
  )
}