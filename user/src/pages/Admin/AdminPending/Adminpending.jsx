import React, { useState } from 'react';
import "../../../components/Table/Table.css";
//import useFetch from "../../../Hooks/useFetch.js";
import {Link} from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../../datatablesource.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Admin from "../../../components/Admin/Admin.jsx";
// Import useState hook from React
//import React, { useState } from 'react';

// Create an array of objects with unique id properties
const rows = [
  { id: 1, value: 5 },
  { id: 2, value: 8 },
  { id: 3, value: 2 },
  { id: 4, value: 6 },
];

export default function Adminpending() {
  // Define state for loading
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {/* Render admin and data grid components */}
      <Admin />
      <div style={{ height: 400, width: '100%' }} className="Table-admin">
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flexGrow: 1 }}>
            <div className='listTitle'>Events</div>

            <div className='in-nav'>
              <ul>
                <li>
                  <Link to="/" style={{ color: 'inherit', textDecoration: "none" }}>
                    <h6>Pending</h6>
                  </Link>
                </li>
                <li>
                  <Link to="approved" style={{ color: 'inherit', textDecoration: "none" }}>
                    <h6>Approved</h6>
                  </Link>
                </li>
                <li>
                  <Link to="declined" style={{ color: 'inherit', textDecoration: "none" }}>
                    <h6>Declined</h6>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Render DataGrid component with rows and columns */}
            {loading ? (
              "Loading"
            ) : (
              <DataGrid
                rows={rows}
                columns={userColumns}
                pageSize={6}
                rowsPerPageOptions={[5]}
                getRowId={row => row.id}
              />
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

// export default function Adminpending() {

//   //const {data,loading,error} = useFetch("/event?status=Pending");
//   const rows = [
//     { id: 1, value: 5 },
//     { id: 2, value: 8 },
//     { id: 3, value: 2 },
//     { id: 4, value: 6 },
//   ];
// const loading = false;
// console.log(data);
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
