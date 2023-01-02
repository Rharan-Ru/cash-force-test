import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';


export const useStyles = makeStyles((theme) => ({
    gridContainer: {
        minHeight: '100vh',
    },
    sideBar: {
        backgroundColor: '#FBFDFE'
    },
    main: {
        boxShadow: '0px 10px 30px rgba(225, 229, 236, 0.5)',
    },
    ligth: {
        "&:before": {
            content: "''",
            width: '4px',
            height: '65px',
            backgroundColor: 'blue',
            marginRight: '20px'
        }
    },
    icon: {
        marginRight: '10px'
    },
    logo: {
        padding: '20px'
    },
    header: {
        height: '10vh',
        backgroundColor: 'none'
    },
    container: {
        marginTop: '8vh',
    },
    subtitle: {
        color: 'gray'
    }
}));

export const theme = createTheme({
    components: {
        // Name of the component
        MuiAppBar: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    boxShadow: 'none',
                    backgroundColor: 'inherit'
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontWeight: 700
                },
            },
        },
        MuiTable: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    borderCollapse: 'separate',
                    borderSpacing: '0 20px'
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                // Name of the slot
                head: {
                    border: 'none'
                },
                root: {
                    borderTop: '1px solid rgba(224, 224, 224, 1)',
                },
            },
        },
    },
});