import React, {useState, useEffect} from 'react';
import "./Navbar.css";
import DropdownItem from "./DropdownItem.jsx";
import logo from './Image/Logo.png';
import cb from './Image/cb.png';
import cblogo from './Image/cb.png';
import admin from './Image/admin.png';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
  const [user, setUser] = useState(null);


  async function getUser() {
    const res = await fetch("http://localhost:8877/api/user/whoami", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      credentials: "include",
    });
    const data = await res.json();
    //console.log(data);
    if (data.success === true) {
      setUser(data.user);
    }
  }

  async function handleLogOut() {
    const res = await fetch("/api/user/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      credentials: "include",
    });
    toast.success("Logout Successful");
    navigate("/");
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
        <nav class="navbar bg-light out-nav">
        <div class="nav-container-fluid">
            <MDBRow>
                <MDBCol>
                 
                 <img src={cb} className="nav-cb" alt=""/>
                 
                </MDBCol>
                <MDBCol>
                <img src={logo} className="nav-logo" alt=""/> 
                
                </MDBCol>
                <MDBCol>
                <div className='menu-containered'>
                <div className='nav-menu-triggered' onClick={()=>{setOpen(!open)}}>
                    <span className="nav-Adname"> {user ? user.name : 'Loading...'} </span>
                    <img src={admin} className="nav-admin" alt=""/>
                </div>
                <MDBCol></MDBCol>
                <div className={`nav-dropdown-menues ${open? 'active':'inactive'}`}>
                    <h6> {user ? user.name : 'Loading...'} </h6>
                    <ul>
                        <button onClick={handleLogOut}>Logout</button>
                        {/* <DropdownItem text = {"Log Out"} onClick={handleLogOut} /> */}
                    </ul> 
                </div>
            </div>
                </MDBCol>
            </MDBRow>
            
            
        </div>
    </nav>
    </div>
  )
}
