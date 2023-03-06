import React from 'react'
import Card from 'react-bootstrap/Card'
//import Button1 from 'react-bootstrap/Button';
import { Dialog } from "@mui/material";
import { useState } from "react";
import { Button } from "react-bootstrap";



const Cards = ({ 
    venue_id,
    name,
    room_no,
    location,
    capacity,
    facilities,
    image
}) => {
    const [venueToggle, setVenueToggle] = useState(false);

    return (
        <>
            
                            <Card style={{ width: '19rem',border:"none" }} className="hove mb-4">
                                <Button onClick={()=> setVenueToggle(!venueToggle)}>
                                <Card.Img variant="top" className='cd' src={image} />
                                </Button>
                               
                                <div className="card_body">
                                    <div className='info'>
                                    <div className="upper_data d-flex justify-content-between align-items-center">
                                        <span className='text_upper'>
                                            <h4 className='mt-2'>{name}</h4>
                                            <h5 className= 'w-500 address'>{location}</h5>
                                        </span>
                                        
                                        
                                        <span className = 'purple'><Button as="input" type="button" value="Book" variant='book' />{' '}
                                        
                                        </span>
                                    </div>
                                    </div>
                                </div>

                                {venueToggle !== undefined && (
            <Dialog open={venueToggle} onClose={()=>setVenueToggle(!venueToggle)}>
                <div className="DialogBox">
                    <div><img src={image}></img></div>
                    <p>{name}</p>
                    <p>{room_no}</p>
                    <p>{location}</p>
                    <p>{capacity}</p>
                    <p>{facilities}</p>
                </div>
            </Dialog>
            )}
                            

                            </Card>
                    

        </>
    )
}
export default Cards;

/*
<Modal show={showModal} onHide={() => setShowModal(false)} className="modal-container-venue">
<Modal.Header closeButton className="modal-header-venue">
<Modal.Title className="modal-title-venue">Booking Details</Modal.Title>
</Modal.Header>
<Modal.Body className="modal-body-venue">
{selectedVenue.photos && (
<Carousel showArrows={true} showThumbs={false} useKeyboardArrows showIndicators={true}>
{selectedVenue.photos.map((image, i) => {
return (
<div key={i}>
  <img src={image} alt="" className="slider-image-venue" />
</div>
);
})}
</Carousel>
)}
<div className="d-flex justify-content-between align-items-center">
<h4 className="mt-2">{selectedVenue.name}</h4>
<h5 className="w-500 ">{selectedVenue.location}</h5>
</div>
<div className="d-flex mt-4">
<div className="w-50 text-left">
<p>Room No:</p>
<p>Location:</p>
<p>Capacity:</p>
<p>Facilities:</p>
</div>
<div className="w-50 text-left">
<p>{selectedVenue.room_no}</p>
<p>{selectedVenue.location}</p>
<p>{selectedVenue.capacity}</p>
</div>
</div>
<div className="facilities-container">
{selectedVenue.facilities &&
selectedVenue.facilities.map((facility) => (
<div key={facility} className="facility">
{facility}
</div>
))}
</div>
<div className="mt-4 text-center">
<Button as="input" type="button" value="Confirm" variant="book" />
</div>
</Modal.Body>
</Modal>
</>
);
}; */