import React, {useState} from 'react';
import "./Navbar.css";
import DropdownItem from "./DropdownItem.jsx";
import logo from './Image/Logo.png';
import cb from './Image/cb.png';
import admin from './Image/admin.png';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Navbar() {
    const [open, setOpen] = useState(false);
  return (
    <div>
        <nav class="navbar bg-light out-nav">
        <div class="container-fluid">
            <MDBRow>
                <MDBCol>
                <img src={logo} className="logo" alt=""/>
                </MDBCol>
                <MDBCol>
                <img src={cb} className="cb" alt=""/>
                </MDBCol>
                <MDBCol>
                <div className='menu-containered'>
                <div className='menu-triggered' onClick={()=>{setOpen(!open)}}>
                    <span className="Adname"> Admin</span>
                    <img src={admin} className="admin" alt=""/>
                </div>
                <MDBCol></MDBCol>
                <div className={`dropdown-menues ${open? 'active':'inactive'}`}>
                    <h6> Celestial </h6>
                    <ul>
                        <DropdownItem text = {"Log Out"} />
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
