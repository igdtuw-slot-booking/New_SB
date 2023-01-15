import React from 'react';
import Rocket from '../../../src/assets/Rocket.png';

function Content() {
    return (
        <div>
                <div className='landingtext'>
                    <h1>WELCOME TO</h1>
                    <h1>SLOT BOOKING</h1>
                    <h1>PORTAL OF IGDTUW</h1>
                     <h2 className='landinglogin'>Login as:</h2>
                </div>
                <div className="landingButtons">
                    <button className='landingAdmin'><a href='/loginAdmin'>Admin</a></button>
                    <button className='landingStudent'><a href='/loginuser'>Student</a></button>
                </div>
                <figure>
                    <img src={Rocket} alt="Rocket"  className="landingRocket" />
                </figure>
        </div>
    )
}
export default Content
