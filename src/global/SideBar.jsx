import { Box, IconButton, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { colorTokens } from '../theme';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, Dashboard, HelpOutline, HomeOutlined, MapOutlined, MenuOpenOutlined, MenuOutlined, PeopleOutline, PersonOutline, PieChartOutline, ReceiptOutlined, TimelineOutlined } from '@mui/icons-material';


// const Item = ({ title, to, icon, selected, setSelected }) => {
//     const theme = useTheme()
//     const colors = colorTokens(theme.palette.mode)

//     return (
//         <MenuItem
//             active={selected === title}
//             style={{ color: colors.grey[100] }}
//             onClick={()=>setSelected(title)}
//             icon={icon}
//         >

//             <Link to={to}><Typography>{title}</Typography></Link>
//         </MenuItem>
//     )
// }


const MySidebar = () => {
    const theme = useTheme()
    const colors = colorTokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false)
    // const [selected, setSelected] = useState('dashboard')

    // const profile = () => {
    //     return (
    //         <Box
    //             mb={'25px'}
    //         >
    //             <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
    //                 <img
    //                     alt='profile-user'
    //                     width={'100px'}
    //                     height={'100px'}
    //                     src='../../assets/1.webp'
    //                     style={{ cursor: 'pointer', borderRadius: 50 }}
    //                 />
    //             </Box>
    //             <Box textAlign={'center'}>
    //                 <Typography variant='h2'>
    //                     Ed Roh
    //                 </Typography>
    //                 <Typography variant='h5' color={colors.green[500]}>
    //                     VP fancy Admin
    //                 </Typography>
    //             </Box>
    //         </Box>
    //     )
    // }

    return (
        <Box
        // sx={{
        //     '& pro-sidebar-inner': {
        //         background: `${colors.primary[400]} !important`
        //     },
        //     '& pro-icon_wrapper': {
        //         background: 'transparent !important'
        //     },
        //     '& pro-inner-item': {
        //         padding: '5px 35px 5px 20px !important'
        //     },
        //     '& pro-inner-item:hover': {
        //         color: '#868dfb !important'
        //     },
        //     '& pro-menu-item.active': {
        //         color: '#6870fa !important'
        //     }
        // }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape='circle'>
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOpenOutlined /> : undefined}
                        style={{
                            margin: '10px 0 20px 0',
                            color: colors.grey[100]
                        }}
                    >
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                        >
                            <Typography paddingTop={1}>
                                Admin
                            </Typography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                <MenuOutlined />
                            </IconButton>
                        </Box>
                    </MenuItem>
                    {/* profile */}
                    {!isCollapsed ? (<Box
                        mb={'25px'}
                    >
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <img
                                alt='profile-user'
                                width={'100px'}
                                height={'100px'}
                                src='../../assets/1.webp'
                                style={{ cursor: 'pointer', borderRadius: 50 }}
                            />
                        </Box>
                        <Box textAlign={'center'}>
                            <Typography variant='h2'>
                                Ed Roh
                            </Typography>
                            <Typography variant='h5' color={colors.green[500]}>
                                VP fancy Admin
                            </Typography>
                        </Box>
                    </Box>) : undefined}
                    {/* menuitem */}
                    <Box>
                        <MenuItem
                            icon={<HomeIcon />}
                        >
                            <Link to={'/'}><Typography>DashBoard</Typography></Link>
                        </MenuItem>
                        <MenuItem
                            icon={<PeopleOutline />}
                        >
                            <Link  to={'/team'}><Typography>Team</Typography></Link>
                        </MenuItem>
                        <MenuItem
                            icon={<ContactsOutlined />}
                        >
                            <Link  to={'/contacts'}><Typography>Contacts</Typography></Link>
                        </MenuItem>
                        <MenuItem
                            icon={<ReceiptOutlined />}
                        >
                            <Link  to={'/invoice'}><Typography>Invoice</Typography></Link>
                        </MenuItem>
                        <MenuItem
                            icon={<PersonOutline />}
                        >
                            <Link  to={'/form'}><Typography>Form</Typography></Link>
                        </MenuItem>
                        <MenuItem
                            icon={<CalendarTodayOutlined />}
                        >
                            <Link  to={'/calendar'}><Typography>Calendar</Typography></Link>
                        </MenuItem>
                        <MenuItem
                            icon={<HelpOutline />}
                        >
                            <Link  to={'/FAQ'}><Typography>FAQ</Typography></Link>
                        </MenuItem>
                        <Typography>Chart</Typography>
                        <MenuItem
                            icon={<BarChartOutlined />}
                        >
                            <Link  to={'/bar'}><Typography>Bar Chart</Typography></Link>
                        </MenuItem>
                        <MenuItem
                            icon={<PieChartOutline />}
                        >
                            <Link  to={'/Pie'}><Typography>Pie Chart </Typography></Link>
                        </MenuItem>
                        <MenuItem
                            icon={<TimelineOutlined />}
                        >
                            <Link  to={'/line'}><Typography>Line Chart</Typography></Link>
                        </MenuItem>
                        <MenuItem
                            icon={<MapOutlined />}
                        >
                            <Link  to={'/map'}><Typography>Map</Typography></Link>
                        </MenuItem>
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default MySidebar;
