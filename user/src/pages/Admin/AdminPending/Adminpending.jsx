import React from 'react';
import "../../../components/Table/Table.css";
import useFetch from "../../../Hooks/useFetch.js";
import {Link} from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../../datatablesource.js';

import Admin from "../../../components/Admin/Admin.jsx";

export default function Adminpending() {

  const {data,loading,error} = useFetch("/event?status=Pending");

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
                          <Link to="/" style={{color:'inherit', textDecoration:"none"}}><h6>Pending</h6></Link>
                        </li>
                        <li>
                          <Link to="approved" style={{color:'inherit', textDecoration:"none"}}><h6>Approved</h6></Link>
                        </li>
                        <li>
                          <Link to="declined" style={{color:'inherit', textDecoration:"none"}}><h6>Declined</h6></Link>
                        </li>
                    </ul>
                </div>

            {loading ? (
                "Loading"
            ) : (
                <>
                    <DataGrid
                    rows={data}
                    columns={userColumns}
                    pageSize={6}
                    rowsPerPageOptions={[5]}
                    getRowId={row=>row._id}
                    />
                </>
            )}
            
        </div>
      </div>
    </div>
    </div>
  )
}
