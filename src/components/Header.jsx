import { Box, Typography, useTheme } from "@mui/material"
import { colorTokens } from "../theme"

const Header =({title,subtitle})=>{
    const theme = useTheme()
    const colors = colorTokens(theme.palette.mode)
    return(
        <Box mb={'30px'}>
            <Typography
            color={colors.grey[100]}
            fontWeight={'bold'}
            sx={{mb:'5px'}}
             variant="h2" >
                {title}
            </Typography>
            <Typography
            color={colors.green[400]}
             variant="h5">
                {subtitle}
            </Typography>
        </Box>
    )
}

export default Header;