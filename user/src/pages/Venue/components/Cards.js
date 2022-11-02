import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


const Cards = ({ data }) => {
    return (
        <>
            {
                data.map((element, k) => {
                    return (
                        <>
                            <Card style={{ width: '19rem',border:"none" }} className="hove mb-4">
                                <Card.Img variant="top" className='cd' src={element.imgdata} />
                               
                                <div className="card_body">
                                    <div className='info'>
                                    <div className="upper_data d-flex justify-content-between align-items-center">
                                        <span className='text_upper'>
                                            <h4 className='mt-2'>{element.rname}</h4>
                                            <h5 className= 'w-500 address'>{element.address}</h5>
                                        </span>
                                        
                                        
                                        <span className = 'purple'><Button as="input" type="button" value="Book" variant='book' />{' '}
                                        
                                        </span>
                                    </div>
                                    </div>
                                </div>

                            </Card>
                        </>
                    )
                })

            }

        </>
    )
}
export default Cards;