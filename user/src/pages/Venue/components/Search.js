import React, { useEffect, useState } from 'react'
import Venuedata from './VenueData'
import "./style.css"
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import Button from 'react-bootstrap/Button';
import Set from './Set';
import Nav from "../../../components/Navbar/Navbar.jsx"
//import Nav from 'user/src/components/Navbar/Navbar.jsx';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Search = () => {

    const [fdata, setFdata] = useState(Venuedata);
    const [copydata, setCopyData] = useState([]);
    const [venue, setVenue] = useState(null);
    const [name, setName] = useState(null);



    const chanegData = (e) => {
        let getchangedata = e.toLowerCase();

        if (getchangedata === "") {
            setCopyData(fdata);
        } else {
            let storedata = copydata.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getchangedata);
            });

            setCopyData(storedata)
        }
    }


    async function getMyVenue(name="") {
        const res = await fetch(`http://localhost:8877/api/venue?keyword=${name}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            //"Access-Control-Allow-Origin": "*", // Required for CORS support to work
          }
        });
        const data = await res.json();
        //console.log(data);
        if (data.success === true) {
            setVenue(data.venues);
            //console.log(venue);
        } 
      }

      async function searchHandler(e) {
        e.preventDefault();
        const res = await fetch(`http://localhost:8877/api/venue?keyword=${name}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
          },
          credentials: "include",
        });
        const data = await res.json();
        if (data.success === true) {
            setVenue(data.venues);
        }
      }


    useEffect(() => {
        getMyVenue();

        setTimeout(() => {
            setCopyData(Venuedata);
        }, 3000);

    }, [])

    return (
        <>

        <Nav />
      
  
            <MDBRow sm="9" > 
            <div className="navbar_backspace d-flex justify-content-between align-items-center">
            </div>
            </MDBRow> 


            <MDBRow>
                <div className="stepper-wrapper">
                    <div className="stepper-item completed">
                        <div className="step-counter">1</div>
                        <div className="step-name progress_label">Select Venue</div>
                    </div>
                    <div class="stepper-item active">
                        <div class="step-counter">2</div>
                        <div class="step-name">Slot Booking</div>
                    </div>
                </div>


            </MDBRow>

            <MDBRow>
                <MDBCol md='8'>
                    <Form className='d-flex justify-content-center align-items-center mt-3 venue' onSubmit={searchHandler}>
                        <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                            <Form.Control type="text"
                                onChange={(e)=> setName(e.target.value)} 
                                placeholder="Search Venue" />
                        </Form.Group>
                        <Button as="input" type="submit" value="Search" variant='search_button' />
                    </Form>
                </MDBCol>
                <MDBCol md='4'>
                    <Button as="input" type="button" value="Filter" variant='filter_button mt-3' />
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <div className="Progres_Bar">

                </div>

            </MDBRow>


            <MDBRow>
                <MDBCol md='2' className="side_nav d-flex align-items-center">
                    
                </MDBCol>
                <MDBCol md='10'>
                    <section className='iteam_section mt-4 container'>


                        <div className="row mt-2 d-flex justify-content-around align-items-center">
                            {/* {copydata && copydata.length ? <Cards data={copydata} /> : <Set sdata={fdata} />} */}

                            { 
        ( 
          venue && venue.length > 0 ? venue.map((vn)=>(
              <div className="venues" key={vn._id}>
              <Cards 
      venue_id={vn.id}
      name={vn.name}
      location = {vn.location}
      image = "https://res.cloudinary.com/dgl4djgba/image/upload/v1667108449/cld-sample-2.jpg" 
      capacity={vn.capacity}
      facilities={vn.facilities}
      room_no={vn.room_no}
      />
      </div>
          )) : (<h3>No Venues</h3>)
        )}
                        </div>
                    </section>
                </MDBCol>
            </MDBRow>
        </>
    )
}

export default Search