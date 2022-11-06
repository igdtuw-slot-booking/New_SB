import React from 'react';
import Rocket from '../../../src/assets/Rocket.png';

function Content() {
    return (
        <div class="landingpage">
                <div className='landingtext'>
                    <h1>WELCOME TO</h1>
                    <h1>SLOT BOOKING</h1>
                    <h1>PORTAL OF IGDTUW</h1>
                     <h2 className='landinglogin'>Login as:</h2>
                </div>
                <div className="Buttons">
                    <button className='Admin'>Admin</button>
                    <button className='Student'>Student</button>
                </div>
                <figure>
                    <img src={Rocket} alt="Rocket"  className="landingRocket" />
                </figure>
        </div>
    )
}
export default Content
