import { boxSizing } from '@mui/system';
import React from 'react';
//import useFetch from "../../../Hooks/useFetch.js";
import "./UserdataBox.css"

export default function UserdataBox() {

//     const { data, loading, error } = useFetch("/event/countByStatus?status=Pending,Approved,Declined,Cancelled")
const data=[5,8,2,6];
const loading = false;
// console.log(data);
  return (
    <div >
        {loading ? ( "Loading" 
        ) : ( 
        <>
        <div className='user-container'>
            <div className='row'>
                <div className='col'>
                    <h5>Total Bookings</h5>
                </div>
                <div style={{ textAlign: 'left' , width:'10%', boxSizing:'content-box'}} className='col' >
                    <h5>{(data[0]+data[1]+data[2]+data[3])}</h5>
                </div>
            
            </div>
            <div classname='Userbookingdata'>

            <div className='row'>
                <div className='col'>
                    <h5>Confirmed Bookings</h5>
                </div>
                <div style={{ textAlign: 'right' }} className='col'>
                    <h5>{data[1]}</h5>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h5>Cancelled by Admin</h5>
                </div>
                <div style={{ textAlign: 'right' }} className='col'>
                    <h5>{data[2]}</h5>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h5>Cancelled by User</h5>
                </div> 
                <div style={{ textAlign: 'right' }} className='col'>
                    <h5>{data[3]}</h5>
                </div>
            </div>
            </div>
           
        </div>
        </>
        )}
    </div>
  )
}
