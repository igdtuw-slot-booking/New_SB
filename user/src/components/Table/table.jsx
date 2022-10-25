import React from 'react'
import "./Table.css";

//import Table from '@mui/material/Table';
//import TableBody from '@mui/material/TableBody';
//import TableCell from '@mui/material/TableCell';
//import TableContainer from '@mui/material/TableContainer';
//import TableHead from '@mui/material/TableHead';
//import TableRow from '@mui/material/TableRow';
//import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';


export default function table() {
  return (

    <div className='Table-admin'>
        <div className='listTitle'>Events</div>
        <div className='in-nav'>
            <ul>
                <li>
                    <h6>Pending</h6>
                </li>
                <li>
                    <h6>Approved</h6>
                </li>
                <li>
                    <h6>Declined</h6>
                </li>
            </ul>
        </div>

        <DataGrid
            rows={userRows}
            columns={userColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        
    </div>
  )
}


/*
<TableContainer component={ Paper } className="table">
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Event Description</TableCell>
                        <TableCell className="tableCell">Venue</TableCell>
                        <TableCell className="tableCell">Equipment</TableCell>
                        <TableCell className="tableCell">Time</TableCell>
                        <TableCell className="tableCell">Duration</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">
                                <div classname="cellWrap">
                                    {row.date}
                                    {row.month}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">
                                <div classname="cellWrapDesc">
                                    {row.descHead}
                                    {row.descBody}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.venue}</TableCell>
                            <TableCell className="tableCell">{row.equipment}</TableCell>
                            <TableCell className="tableCell">{row.time}</TableCell>
                            <TableCell className="tableCell">{row.duration}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

*/