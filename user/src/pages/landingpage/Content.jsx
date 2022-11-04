import React from 'react';
import Rocket from '../../../src/assets/Rocket.png';
import '../../pages/landingpage/landingpage.css';

function Content() {
    return (
        <div className="content">
            <main>
                <div className='text'>
                    <h1>WELCOME TO</h1>
                    <h1>SLOT BOOKING</h1>
                    <h1>PORTAL OF IGDTUW</h1>
                     <h2>Login as:</h2>
                </div>
                <div className="Buttons">
                    <button className='landing-Admin'>Admin</button>
                    <button className='Student'>Student</button>
                </div>
            </main>
            <figure>
                <img src={Rocket} alt="Rocket" height={550} width={550} className="Rocket" />
            </figure>
        </div>
    )
}

export default Content
