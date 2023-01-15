import React from 'react'
import "./Sidebar.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';

export default function Sidebar() {
  // const handleClick= () =>{
  //   console.log('hello from side bar'); 
  // }
  // let navigate = useNavigate();
  // navigate('/user/:userId')

  // let navigatetovenue = useNavigate();
  // navigatetovenue('user/:userId/venue')
  return (
    <Card style={{ width: '10rem', height: '10rem', border: "none", top:'30vh' }} className=" d-flex justify-content-space-evenly align-content-center">
<Card.Body className='d-flexflex-direction-column align-items-center'>
    <Card.Text className='cardtext'>
      <a href="/user/:userId"><Button as="input" type="button" value="Dashboard" variant='side_button' />
</a>
    </Card.Text>
    <Card.Text className='cardtext'>
      <a href="/user/:userId/venue">
        <Button as="input" type="button" value="Book Venue" variant='side_button' />
      </a>
    </Card.Text>
</Card.Body>
</Card>
  )
//   return (
//     <Card style={{ width: '10rem', height: '10rem', border: "none", top:'30vh' }} className=" d-flex justify-content-space-evenly align-content-center">
// <Card.Body className='d-flexflex-direction-column align-items-center'>
//     <Card.Text >
//         <Button onClick={()=> {navigate("/user/:userId");}} as="input" type="button" value="Dashboard" variant='side_button' />
//     </Card.Text>
//     <Card.Text>
//         <Button onClick={()=> {navigatetovenue("/user/:userId/venue");}} as="input" type="button" value="Book Venue" variant='side_button' />
//     </Card.Text>
// </Card.Body>
// </Card>
//   )
}
