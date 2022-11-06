import React from 'react';
import useFetch from "../../../Hooks/useFetch.js";

export default function UserdataBox() {

    const { data, loading, error } = useFetch("/event/countByStatus?status=Pending,Approved,Declined,Cancelled")

console.log(data);
  return (
    <div>
        {loading ? ( "Loading" 
        ) : ( 
        <>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h5>Total Bookings</h5>
                </div>
                <div className='col'>
                    <h5>{(data[0]+data[1]+data[2]+data[3])}</h5>
                </div>
            
            </div>
            <div className='row'>
                <div className='col'>
                    <h5>Confirmed Bookings</h5>
                </div>
                <div className='col'>
                    <h5>{data[1]}</h5>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h5>Cancelled by Admin</h5>
                </div>
                <div className='col'>
                    <h5>{data[2]}</h5>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h5>Cancelled by User</h5>
                </div> 
                <div className='col'>
                    <h5>{data[3]}</h5>
                </div>
            </div>
           
        </div>
        </>
        )}
    </div>
  )
}
