import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette:{

        primary:{
            main:"#5B3DF5"
        },

        secondary:{
            main:"#7C5CFF"
        },

        success:{
            main:"#22C55E"
        },

        warning:{
            main:"#F59E0B"
        },

        info:{
            main:"#3B82F6"
        },

        background:{
            default:"#F5F7FB"
        }

    },

    typography:{

        fontFamily:"Inter, sans-serif",

        h4:{
            fontWeight:700
        },

        h5:{
            fontWeight:600
        },

        h6:{
            fontWeight:600
        },

        button:{
            textTransform:"none",
            fontWeight:600
        }

    },

    shape:{
        borderRadius:12
    }

});

export default theme;