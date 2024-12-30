import { Box, IconButton, InputBase } from "@mui/material"
import {useTheme} from "@mui/material"

import { LightModeOutlined, ModeCommentOutlined } from "@mui/icons-material"
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined"
import NotificationOutlined from "@mui/icons-material/NotificationsOutlined"
import SearchOutlined from "@mui/icons-material/SearchOutlined"
import SettingsIcon from '@mui/icons-material/Settings';
// import SettingsOutlined   from "@mui/icons-material/SettingsOutlined"
import PersonOutlineOutlined  from "@mui/icons-material/PersonOutline"
import { colorTokens, useChangeMode, useColorModecontext } from "../theme"

const Topbar=()=>{
    const theme =useTheme()
    const changeMode=useColorModecontext()
    const colors = colorTokens(theme.palette.mode)
    return(
        <Box display={'flex'} justifyContent={'space-between'} p={2}> 
            <Box display={'flex'} backgroundColor={colors.primary[400]}>
                <InputBase sx={{ml:2,flex:1}} placeholder="search"/>
                <IconButton type="button" sx={{p:1}}>
                    <SearchOutlined/>
                </IconButton>
            </Box>
            <Box display={'flex'}>
                <IconButton onClick={changeMode}>
                    {theme.palette.mode==='dark'?<LightModeOutlined/>:<DarkModeOutlined/>}
                </IconButton>
                <IconButton>
                    <NotificationOutlined/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
                <IconButton>
                    <PersonOutlineOutlined/>
                </IconButton>
            </Box>
        </Box>
    )
}
export default Topbar