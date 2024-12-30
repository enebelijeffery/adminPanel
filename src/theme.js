import { createContext, useState,useMemo, useContext } from "react";
import { createTheme, Typography } from "@mui/material";
import { Palette } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { dark } from "@mui/material/styles/createPalette";


const lightModeColors={
    grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414"
    },
   primary: {
        100: "#d0d1d5",
        200: "#a1a4ab",
        300: "#727681",
        400: "#434957",
        500: "#141b2d",
        600: "#101624",
        700: "#0c101b",
        800: "#080b12",
        900: "#040509"
    },
    green: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922"
    },
    red: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f"
    },
    indigo: {
        100: "#e1e2fe",
        200: "#c3c6fd",
        300: "#a4a9fc",
        400: "#868dfb",
        500: "#6870fa",
        600: "#535ac8",
        700: "#3e4396",
        800: "#2a2d64",
        900: "#151632"
    }
}
const darkModeColors={
    grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414"
    },
   primary: {
        100: "#d0d1d5",
        200: "#a1a4ab",
        300: "#727681",
        400: "#141414",
        500: "#141b2d",
        600: "#101624",
        700: "#0c101b",
        800: "#080b12",
        900: "#040509"
    },
    green: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922"
    },
    red: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f"
    },
    indigo: {
        100: "#e1e2fe",
        200: "#c3c6fd",
        300: "#a4a9fc",
        400: "#868dfb",
        500: "#6870fa",
        600: "#535ac8",
        700: "#3e4396",
        800: "#2a2d64",
        900: "#151632"
    }
}
export const colorTokens=(mode)=>{
    if (mode==='dark') {
        return darkModeColors
    } else {
        return lightModeColors
    }
}
const  typography ={
    fontFamily:['Source Sans Pro','sans-serif'].join(','),
    fontSize: 12,
    h1:{
        fontFamily:['Source Sans Pro','sans-serif'].join(','),
        fontSize: 40,
    },
    h2:{
        fontFamily:['Source Sans Pro','sans-serif'].join(','),
        fontSize: 32,
    },
    h3:{
        fontFamily:['Source Sans Pro','sans-serif'].join(','),
        fontSize: 24,
    },
    h4:{
        fontFamily:['Source Sans Pro','sans-serif'].join(','),
        fontSize: 20,
    },
    h5:{
        fontFamily:['Source Sans Pro','sans-serif'].join(','),
        fontSize:16,
    },
    h6:{
        fontFamily:['Source Sans Pro','sans-serif'].join(','),
        fontSize:14,
    },

}
const darkTheme=createTheme({
    palette:{
        mode:'dark',
        primary:{
            main:darkModeColors.primary[500]
        },
        secondary:{
            main:darkModeColors.green[500]
        },
        neutral:{
            dark:darkModeColors.grey[700],
            main:darkModeColors.grey[500],
            light:darkModeColors.grey[100]
        },
        background:{
            default:darkModeColors.primary[500]
        }
    },
    typography:typography
})
const lightTheme=createTheme({
    palette:{
        mode:'light',
        primary:{
            main:lightModeColors.primary[500]
        },
        secondary:{
            main:lightModeColors.green[500]
        },
        neutral:{
            dark:lightModeColors.grey[700],
            main:lightModeColors.grey[500],
            light:lightModeColors.grey[100]
        },
        background:{
            default:'#fcfcfc'
        }
    },
    typography:typography
})

const themeSetting =(mode)=>{
    const color=colorTokens(mode)
    return(
        {
            Palette:{
                mode:mode,
                ...(mode=== 'dark'
                    ?
                    {
                        primary:{
                            main:color.primary[500]
                        },
                        secondary:{
                            main:color.green(500)
                        },
                        neutral:{
                            dark:color.grey[700],
                            main:color.grey[500],
                            light:color.grey[100]
                        },
                        background:{
                            default:color.primary[500]
                        }
                    } : {
                        primary:{
                            main:color.primary[100]
                        },
                        secondary:{
                            main:color.green(500)
                        },
                        neutral:{
                            dark:color.grey[700],
                            main:color.grey[500],
                            light:color.grey[100]
                        },
                        background:{
                            default:'#fcfcfc',
                        }
                    }
                )
            },
            typography:{
                fontFamily:['Source Sans Pro','sans-serif'].join(','),
                fontSize: 12,
                h1:{
                    fontFamily:['Source Sans Pro','sans-serif'].join(','),
                    fontSize: 40,
                },
                h2:{
                    fontFamily:['Source Sans Pro','sans-serif'].join(','),
                    fontSize: 32,
                },
                h3:{
                    fontFamily:['Source Sans Pro','sans-serif'].join(','),
                    fontSize: 24,
                },
                h4:{
                    fontFamily:['Source Sans Pro','sans-serif'].join(','),
                    fontSize: 20,
                },
                h5:{
                    fontFamily:['Source Sans Pro','sans-serif'].join(','),
                    fontSize:16,
                },
                h6:{
                    fontFamily:['Source Sans Pro','sans-serif'].join(','),
                    fontSize:14,
                },

            }
        }
    )
}

export const ColorModeContext=createContext()

export const useColorModecontext=()=>{
    return useContext(ColorModeContext)
}

export const useChangeMode=()=>{
    const [mode, setMode]=useState('dark')
    const changeMode = ()=>{
        setMode((prevMode)=>(prevMode==='light'?'dark':'light'))
    }
    const theme=(()=>mode==='dark'?darkTheme:lightTheme)
    return [theme, changeMode]
}