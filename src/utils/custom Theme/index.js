import { createTheme } from "@mui/material";



export const customTheme=createTheme({
    palette:{
        primary:{
            main:'#0d6efd'
        },
        secondary:{
            main:'#0e1133'
        },
        info:{
            main: '#6d6e75'
        },
        white:{
            main:'#ffffff'
        },
        dark:{
            main:'#2b4eff'
        },
        blue:{
            main:'#525FE1'
        },
        grey:{
            main:'#5e5f6b'
        }
        
       
    },
    typography:{
        // fontFamily: 'Public Sans' ,
        // fontFamily: 'Hind',

        // fontFamily: 'Poppins', 
        h5:{
            fontSize:'20px'
        },
        h4:{
            fontSize:'25px'
        },
        h3:{
            fontSize:'55px'
        },
        h2:{
            fontSize:"30px",
        },
    }
})