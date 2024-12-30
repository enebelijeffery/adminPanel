import { Box,List, ListItem, ListItemText, Typography, useTheme } from "@mui/material"
import { useState } from "react"
import  {formatDate} from '@fullcalendar/core'
import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import Header from "../../components/Header"
import { colorTokens } from "../../theme"


const Calendar = () => {
    const theme =useTheme()
    const colors=colorTokens(theme.palette.mode)
    const [currentEvents,setCurrentEvents] = useState([])
    const handleDataClick =(selected)=>{
        const title = prompt('please enter a new title for your event');
        const CalendarApi = selected.view.calendar;
        CalendarApi.unselect();
        if(title){
            CalendarApi.addEvent({
                id:`${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay:selected.allDay
            })
        }
    }
    const handleEventClick=(selected)=>{
        if(
            window.confirm(`are you sure you want to delete the event '${selected.event.title}'`)
        ){
            selected.event.remove()
        }
    }
    return (
        <Box>
            <Header title={'CALENDAR'} subtitle={'full calender interactive page'} />
            <Box display={'flex'} justifyContent={'space-between'}>
                <Box
                 flex={'1 1 20%'}
                 bgcolor={colors.primary[400]}
                 p={'15px'}
                 borderRadius={'4px'}
                 >
                    <Typography variant="h5">
                        Events
                    </Typography>
                    <List>
                        {
                            currentEvents.map((event)=>{
                                <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor:colors.green[500],
                                    margin: '10px 0',
                                    borderRadius:'2px'
                                }}
                                >
                                    <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start,{
                                                year:'numeric',
                                                month:'short',
                                                day : 'numeric'
                                            })}
                                        </Typography>
                                    }
                                    />
                                </ListItem>
                            })
                        }
                    </List>
                </Box>
                {/* {calender } */}
                <Box flex={'1 1 100%'} ml={'15px'}>
                    <FullCalendar
                    height='75vh'
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin
                    ]}
                    headerToolbar={{
                        left:'prev, next today',
                        center:'title',
                        right:'dayGridMonth,timeGridweek,timeGridDay,listMonth'
                    }}
                    initialView='dayGridMonth'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvent={true}
                    select={handleDataClick}
                    eventClick={handleEventClick}
                    eventsSet={(events)=>setCurrentEvents(events)}
                    initialEvents={[
                        {id:'1234',title:'all-day event',date:'2022-09-14'},
                        {id:'4321',title:'timed event',date:'2022-09-28'},
                    ]}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Calendar