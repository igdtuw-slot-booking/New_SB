import React from 'react'
import "./User.css";

import Navbar from "../Navbar/Navbar.jsx";
import Table from "../Table-user/Table-user.jsx";
import Sidebar from '../UserSidebar/Sidebar';


export default function User() {
  return (
    <div className="admin-App">
      <Navbar/>
      <Sidebar/>
      <h4 className='welcome'>Welcome Celestial !</h4>
      {/* <Table/> */}
    </div>
  )
}

/*
<Navbar/>
      <h4 className='welcome'>Welcome Celestial !</h4>
*/
