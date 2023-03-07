import React, { useState, useEffect } from 'react';
import "../../../components/Table/Table.css";
//import useFetch from "../../../Hooks/useFetch.js";
import {Link} from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../../datatablesource.js';

import Admin from "../../../components/Admin/Admin.jsx";



  //const {data,loading,error} = useFetch("/event?status=Declined");
  const data = [
    { _id: '1', value: 5 },
    { _id: '2', value: 8 },
    { _id: '3', value: 2 },
    { _id: '4', value: 6 },
  ];
  export default function Admindeclined() {
    // Define state for loading
    const [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([]);
    const [rows, setRows] = useState([]);
  
  
    const fetchEvents = async () => {
      setLoading(true);
  
      try {
        const response = await fetch('http://localhost:8877/api/event?status=Declined', {
          method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            },
            credentials: "include",
          
        });
        const data = await response.json();
        //console.log(data);
        if (data.success === true) {
          setRows(data.event);
          setLoading(false);
          //setEvents(data.event);
          //console.log(events);
        }
        
      } catch (error) {
        console.error(error);
      }
  
      setLoading(false);
    };
  
    useEffect(() => {
      fetchEvents()
    }, []);
  return (
    <div>
      <Admin/>

      <div style={{ height: 400, width: '100%' }} className="Table-admin">
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flexGrow: 1 }}>
            <div className='listTitle'>Events</div>

            <div className='in-nav'>
              <ul>
              <li>
                  <a href="http://localhost:3000/admin/">Pending</a>
                  {/* <Link to="/" style={{ color: 'inherit', textDecoration: "none" }}>
                    <h6>Pending</h6>
                  </Link> */}
                </li>
                <li>
                  <a href="http://localhost:3000/admin/approved">Approved</a>
                  {/* <Link to="approved" style={{ color: 'inherit', textDecoration: "none" }}>
                    <h6>Approved</h6>
                  </Link> */}
                </li>
                <li>
                  <a href="http://localhost:3000/admin/:userId/declined">Declined</a>
                  {/* <Link to="declined" style={{ color: 'inherit', textDecoration: "none" }}>
                    <h6>Declined</h6>
                  </Link> */}
                </li>
              </ul>
            </div>

            {loading ? (
              "Loading"
            ) : (
              <DataGrid
                rows={data}
                columns={userColumns}
                pageSize={6}
                rowsPerPageOptions={[5]}
                getRowId={(row) => row._id}
              />
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}






// import React from 'react';
// import "../../../components/Table/Table.css";
// //import useFetch from "../../../Hooks/useFetch.js";
// import {Link} from "react-router-dom";
// import { DataGrid } from '@mui/x-data-grid';
// import { userColumns } from '../../../datatablesource.js';

// import Admin from "../../../components/Admin/Admin.jsx";

// export default function Adminpending() {

//   //const {data,loading,error} = useFetch("/event?status=Declined");
//   const data=[5,8,2,6];
//   const loading = false;
//   return (
//     <div>
//         <Admin/>

//         <div style={{ height: 400, width: '100%' }} className="Table-admin">
//       <div style={{ display: 'flex', height: '100%' }}>
//         <div style={{ flexGrow: 1 }}>
//             <div className='listTitle'>Events</div>

//                 <div className='in-nav'>
//                     <ul>
//                     <li>
//                           <Link to="/" style={{color:'inherit', textDecoration:"none"}}><h6>Pending</h6></Link>
//                         </li>
//                         <li>
//                           <Link to="approved" style={{color:'inherit', textDecoration:"none"}}><h6>Approved</h6></Link>
//                         </li>
//                         <li>
//                           <Link to="declined" style={{color:'inherit', textDecoration:"none"}}><h6>Declined</h6></Link>
//                         </li>
//                     </ul>
//                 </div>

//             {loading ? (
//                 "Loading"
//             ) : (
//                 <>
//                     <DataGrid
//                     rows={data}
//                     columns={userColumns}
//                     pageSize={6}
//                     rowsPerPageOptions={[5]}
//                     getRowId={row=>row._id}
//                     />
//                 </>
//             )}
            
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

