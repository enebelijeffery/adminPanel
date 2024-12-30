import { Box, Typography, useTheme } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { colorTokens } from "../../theme"
import Header from "../../components/Header"
import { mockDataTeam } from "../../data/mockData"
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material"

const Team=()=>{
    const theme =useTheme()
    const colors = colorTokens(theme.palette.mode)
    // const columns =[
    //     {feild:'id',headerName:'ID'},
    //     {feild:'name',headerName:'NAME',flex:1, cellClassName:'name-column-cell'},
    //     {feild:'email',headerName:'EMAIL',flex:'1'},
    //     {feild:'age',headerName:'AGE', type:'number', headerAlign:'left',align:'left'},
    //     {feild:'phone',headerName:'PHONE NUMBER', flex:'1'},
    //     {feild:'access',headerName:'ACCESS',renderCell:({row:{access}})=>{
    //         return(
    //             <Box
    //             width={'60%'}
    //             m={'0 auto'}
    //             p={'5px'}
    //             display={'flex'}
    //             justifyContent={'center'}
    //             backgroundColor={
    //                 access==='admin'
    //                 ?colors.green[600]
    //                 :colors.green[700]
    //             }
    //             borderRadius={'4px'}
    //             >
    //                 {access=='admin'&& <AdminPanelSettingsOutlined/>}
    //                 {access=='manager'&& <SecurityOutlined/>}
    //                 {access=='user'&& <LockOpenOutlined/>}
    //                 <Typography color={colors.grey[100]}>
    //                     {access}
    //                 </Typography>
    //             </Box>
    //         )
    //     }}
    // ]
    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name', flex:'', cellClassName:'name-column--cell'},
        { field: 'age', headerName: 'Age', type: 'number' },
        { field: 'email', headerName: 'Email',  flex:'1'},
        { field: 'phone', headerName: 'Phone Number', headerAlign:'left',align:'left'},
        {  headerName: 'Access', width: 200 ,renderCell:({row:{access}})=>{
                    return(
                        <Box
                        width={'60%'}
                        m={'0 auto'}
                        p={'5px'}
                        display={'flex'}
                        justifyContent={'center'}
                        backgroundColor={
                            access==='admin'
                            ?colors.green[600]
                            :colors.green[700]
                        }
                        borderRadius={'4px'}
                        >
                            {access=='admin'&& <AdminPanelSettingsOutlined/>}
                            {access=='manager'&& <SecurityOutlined/>}
                            {access=='user'&& <LockOpenOutlined/>}
                            <Typography color={colors.grey[100]}>
                                {access}
                            </Typography>
                        </Box>
                    )
                }}
          ];
    //       const rows = [
    //     { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
    //     { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
    //     { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' },
    //   ];
    return(
        <Box m={'20px'}>
            <Header title={'TEAM'} subtitle={'Managing The Team'}/>
            <Box
            m={"40px 0 0 0 "}
            height={'75vh'}
            sx={{
                '& .MuiDataGrid-root':{
                    border:'none'
                },
                '& .MuiDataGrid-cell':{
                    borderBottom:'none'
                },
                '& .name-column--cell':{
                    color:colors.green[300]
                },
                '& .MuiDataGrid-columnHeader':{
                    backgroundColor:colors.indigo[700],
                    borderBottom:'none'
                },
                '& .MuiDataGrid-virtualScroller':{
                    backgroundColor:colors.primary[400]
                },
                '& .MuiDataGrid-footerContainer':{
                    borderTop:'none',
                    backgroundColor:colors.indigo[700]
                }
            }}
             >
                <DataGrid rows={mockDataTeam} columns={columns} />
            </Box>
        </Box>
    )
}

export default Team

// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'name', headerName: 'Name', width: 130 },
//   { field: 'age', headerName: 'Age', type: 'number', width: 90 },
//   { field: 'email', headerName: 'Email', width: 200 },
// ];

// const rows = [
//   { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
//   { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
//   { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' },
// ];

// function App() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
//     </div>
//   );
// }

// export default App;


