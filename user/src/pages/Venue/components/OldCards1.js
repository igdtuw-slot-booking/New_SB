import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './modal.css';
const Cards = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const toggleBlur = () => {
    const body = document.querySelector('body');
    if (showModal) {
      body.classList.add('backdrop-blur');
    } else {
      body.classList.remove('backdrop-blur');
    }
};

  return ( 
    <>
      {data.map((element, k) => {
        return (
          <>
            <Card style={{ width: '19rem', border: 'none' }} className="hover mb-4">
              <Card.Img variant="top" className="cd" src={element.imgdata} />

              <div className="card_body">
                <div className="info">
                  <div className="upper_data d-flex justify-content-between align-items-center">
                    <span className="text_upper">
                      <h4 className="mt-2">{element.rname}</h4>
                      <h5 className="w-500 address">{element.address}</h5>
                    </span>

                    <span className="purple">
                      <Button
                        as="input"
                        type="button"
                        value="Book"
                        variant="book"
                        onClick={() => {
                          setSelectedData(element)
                          setShowModal(true)
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Modal show={showModal} onHide={() => setShowModal(false)} className="modal-container-venue">
              <Modal.Header closeButton className="modal-header-venue">
                <Modal.Title className="modal-title-venue">Booking Details</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-body-venue">
  {selectedData.images &&
    <Carousel
      showArrows={true}
      showThumbs={false}
      useKeyboardArrows
      showIndicators={true}
    >
      {selectedData.images.map((image, i) => {
        return (
          <div key={i}>
            <img src={image} alt="" className="slider-image-venue" />
          </div>
        )
      })}
    </Carousel>
  }
  <div className="d-flex justify-content-between align-items-center">
    <h4 className="mt-2">{selectedData.rname}</h4>
    <h5 className="w-500 ">{selectedData.address}</h5>
  </div>
  <div className="d-flex mt-4">
    <div className="w-50 text-left">
      <p>Room No:</p>
      <p>Location:</p>
      <p>Capacity:</p>
      <p>Facilities:</p>
    </div>
    <div className="w-50 text-left">
      <p>{selectedData.roomNo}</p>
      <p>{selectedData.location}</p>
      <p>{selectedData.capacity}</p>
      
    </div>

  </div>
  <div className="facilities-container">
      {selectedData.facilities && selectedData.facilities.map((facility, i) => {
        return (
          <div key={i} className="facility-oval">
            <p>{facility}</p>
          </div>
        )
      })}
    </div>
</Modal.Body>
<Modal.Footer className="modal-footer-venue">
 <Button variant="secondary modalbtnvenue" onClick={() => setShowModal(false)}>
    Close
  </Button> 
  <Button variant="primary modalbtnvenue">Book</Button>
</Modal.Footer>
</Modal>

          </>
        )
      })}
    </>
  )
} 
export default Cards

/*
const Cards = () => {
  const [showModal, setShowModal] = useState(false);
  const [venues, setVenues] = useState([]);
 
  const [selectedVenue, setSelectedVenue] = useState(null);

  useEffect(() => {
    // async function fetchVenues() {
    //   const res = await fetch('http://localhost:8877/api/venue/');
      
    //   const data = await res.json();
    //   setVenues(data);
    // }

    fetchVenues();
  }, []);
  // const [open, setOpen] = useState(false);
  //   const navigate = useNavigate();
  // const [user, setUser] = useState(null);


  async function  fetchVenues(){
    const res = await fetch("http://localhost:8877/api/venue/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    if (data.success === true) {
      setVenues(data);
      console.log(data);
    }
  }

  const handleBookClick = (venue) => {
    setSelectedVenue(venue);
    setShowModal(true);
  };

  return (
    <>
    
      {venues.map((venue) => (
        <Card key={venue.id} style={{ width: '19rem', border: 'none' }} className="hover mb-4">
          <Card.Img variant="top" className="cd" src={venue.photos} />
          
          <div className="card_body">
            <div className="info">
              <div className="upper_data d-flex justify-content-between align-items-center">
                <span className="text_upper">
                  <h4 className="mt-2">{venue.name}</h4>
                  <h5 className="w-500 address">{venue.location}</h5>
                </span>

                <span className="purple">
                  <Button as="input" type="button" value="Book" variant="book" onClick={() => handleBookClick(venue)} />
                </span>
              </div>
            </div>
          </div>
        </Card>
      ))}

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
                }; 
                */

