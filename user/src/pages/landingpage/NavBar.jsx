import React from 'react';
import '../../pages/landingpage/landingpage.css';

function NavBar() {
    return (
        <div className='Parent'>
        <nav>
            <div className='Logo'></div>
            <ul className='navbar'>
                <button className='home'><a href="landingpage.jsx">Home</a></button>
                <li><a href="">About</a></li>
                <li><a href="">Team</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default NavBar
