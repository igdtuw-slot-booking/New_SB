//Temporary Data

export const userColumns = [
        
    { field: 'date', headerName: 'Date', width: 70},
    { field: 'descBody', headerName: 'Description', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    }
]

export const userRows = [
    {
        id: 1234567,
        date: 28,
        month: "AUG",
        descHead: "Orientation",
        descBody: "CB IGDTUW",
        venue: "Auditorium",
        equipment: "Equipments Required",
        time: "10:00 PM",
        duration: "02:00 hrs",
        status: "Approved"
    },
    {
        id: 1234568,
        date: 30,
        month: "AUG",
        descHead: "Orientation",
        descBody: "LEANIN IGDTUW",
        venue: "Auditorium",
        equipment: "Equipments Required",
        time: "10:00 PM",
        duration: "02:00 hrs",
        status: "Approved"
    },{
        id: 1234569,
        date: 1,
        month: "NOV",
        descHead: "Orientation",
        descBody: "GREENSPHERE IGDTUW",
        venue: "Seminar Hall",
        equipment: "Equipments Required",
        time: "10:00 PM",
        duration: "02:00 hrs",
        status: "Declined"
    },{
        id: 1234570,
        date: 8,
        month: "JAN",
        descHead: "Orientation",
        descBody: "INNERVE IGDTUW",
        venue: "Auditorium",
        equipment: "Equipments Required",
        time: "10:00 PM",
        duration: "02:00 hrs",
        status: "Pending"
    },{
        id: 1234571,
        date: 2,
        month: "OCT",
        descHead: "Orientation",
        descBody: "E-CELL IGDTUW",
        venue: "E-303",
        equipment: "Equipments Required",
        time: "10:00 PM",
        duration: "02:00 hrs",
        status: "Pending"
    },{
        id: 1234572,
        date: 7,
        month: "JULY",
        descHead: "Orientation",
        descBody: "IEEE IGDTUW",
        venue: "IT-107",
        equipment: "Equipments Required",
        time: "10:00 PM",
        duration: "02:00 hrs",
        status: "Pending"
    },{
        id: 1234573,
        date: 22,
        month: "FEB",
        descHead: "Orientation",
        descBody: "BHAV IGDTUW",
        venue: "Conference Room",
        equipment: "Equipments Required",
        time: "10:00 PM",
        duration: "02:00 hrs",
        status: "Approved"
    }
    
];