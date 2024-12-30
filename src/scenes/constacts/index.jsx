import { Box, Toolbar, Typography, useTheme } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { colorTokens } from "../../theme"
import Header from "../../components/Header"
import { mockDataContact } from "../../data/mockData"
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material"

const Contact=()=>{
    const theme =useTheme()
    const colors = colorTokens(theme.palette.mode)
    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name', flex:'', cellClassName:'name-column--cell'},
        { field: 'age', headerName: 'Age', type: 'number' },
        { field: 'email', headerName: 'Email',  flex:'1'},
        { field: 'phone', headerName: 'Phone Number', headerAlign:'left',align:'left'},
        { field:'address', headerName: 'Address', width: 200 ,flex:1},
        {field:'city', headerName:'City', flex:1},
        {field:'registrarId', headerName:'RegistrarId', flex:1}
          ];
    return(
        <Box m={'20px'}>
            <Header title={'CONTACTS'} subtitle={'Managing The Contacts'}/>
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
                },
                '& .MuiDataGrid-toolBarContainer .MuiButton-text':{
                    color:`${colors.grey[100]} !important`
                }
            }}
             >
                <DataGrid rows={mockDataContact} columns={columns} components={{Toolbar:GridToolbar}}/>
            </Box>
        </Box>
    )
}

export default Contact

