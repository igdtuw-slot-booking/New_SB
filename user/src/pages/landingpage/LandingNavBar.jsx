import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

function NavBar() {
    return (
        <div>
        <nav>
            <div class="landing_nav-items">
                {/* <ul> */}
                    <MDBRow>
                        <MDBCol>
                       <a href='/'>HOME</a>
                        </MDBCol>
                        <MDBCol>
                        <a href='#'>ABOUT</a>  
                        </MDBCol>
                        <MDBCol>
                        <a href='#'>TEAM</a>
                        </MDBCol>
                    </MDBRow>
                   {/* <li>HOME </li> 
                   <li>ABOUT</li> 
                   <li>TEAM</li> 
                </ul> */}
            </div>
        </nav>
        </div>
    )
}

export default NavBar
