import React from 'react'
import "./Admin.css";

import Navbar from "../Navbar/Navbar.jsx";
import Table from "../Table/table.jsx";


export default function Admin() {
  return (
    <div>
      <Navbar/>
      <h4 className='welcome'>Welcome Celestial !</h4>
      <Table />
      
    </div>
  )
}
