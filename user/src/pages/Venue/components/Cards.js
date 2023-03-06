import React, { useState } from 'react';
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