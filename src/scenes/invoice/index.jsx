import { Box, Typography, useTheme } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { colorTokens } from "../../theme"
import Header from "../../components/Header"
import { mockDataInvoices } from "../../data/mockData"
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material"

const Team=()=>{
    const theme =useTheme()
    const colors = colorTokens(theme.palette.mode)
    
    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name', flex:'', cellClassName:'name-column--cell'},
        { field: 'cost', headerName: 'Cost', type: 'number' },
        { field: 'email', headerName: 'Email',  flex:'1'},
        { field: 'phone', headerName: 'Phone Number', headerAlign:'left',align:'left'},
        { field: 'date', headerName: 'Date',  flex:'1'},
          ];
    
    return(
        <Box m={'20px'}>
            <Header title={'INVOICES'} subtitle={'List of invoices'}/>
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
                <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
            </Box>
        </Box>
    )
}

export default Team

