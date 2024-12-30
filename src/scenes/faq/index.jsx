import { Accordion, Box, Typography, useTheme } from "@mui/material"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { ExpandMore } from "@mui/icons-material"
import { colorTokens } from "../../theme"
import Header from "../../components/Header"
const FAQ=()=>{
    const theme = useTheme()
    const colors = colorTokens(theme.palette.mode)
    return(
        <Box m={'20px'}>
            <Header title={'FAQ'} subtitle={'Frequently Asked Questions Page'}/>
            <Accordion >
                <AccordionSummary expandIcon={<ExpandMore/>}>
                   <Typography color={colors.green[500]} variant="h5">
                    An Important Question
                   </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, natus cumque hic sapiente deserunt blanditiis reprehenderit illo similique culpa! Accusamus odio quibusdam fugiat quae voluptatem soluta quasi porro, explicabo adipisci.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary expandIcon={<ExpandMore/>}>
                   <Typography color={colors.green[500]} variant="h5">
                    An Important Question
                   </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, natus cumque hic sapiente deserunt blanditiis reprehenderit illo similique culpa! Accusamus odio quibusdam fugiat quae voluptatem soluta quasi porro, explicabo adipisci.
                    </Typography>
                </AccordionDetails>
            </Accordion >
            <Accordion >
                <AccordionSummary expandIcon={<ExpandMore/>}>
                   <Typography color={colors.green[500]} variant="h5">
                    An Important Question
                   </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, natus cumque hic sapiente deserunt blanditiis reprehenderit illo similique culpa! Accusamus odio quibusdam fugiat quae voluptatem soluta quasi porro, explicabo adipisci.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary expandIcon={<ExpandMore/>}>
                   <Typography color={colors.green[500]} variant="h5">
                    An Important Question
                   </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, natus cumque hic sapiente deserunt blanditiis reprehenderit illo similique culpa! Accusamus odio quibusdam fugiat quae voluptatem soluta quasi porro, explicabo adipisci.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ