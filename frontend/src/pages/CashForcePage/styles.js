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
        width: 'auto'
    },
    ligth: {
        "&:before": {
            content: "''",
            width: '4px',
            height: '65px',
            backgroundColor: '#00AD8C',
            marginRight: '20px'
        }
    },
    icon: {
        marginRight: '10px',
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
        color: '#727D94'
    },
    providerButton: {
        border: '1px solid #CAD3FF',
        padding: '8px 29px',
        borderRadius: '24px',
        backgroundColor: 'inherit',
        color: '#727D94',
        '&:hover': {
            transition: '0.7s',
            backgroundColor: '#CAD3FF',
            color: 'black',
            cursor: 'pointer'
        }
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
                    border: 'none',
                    color: '#A1A8B8'
                },
                root: {
                    borderTop: '1px solid rgba(224, 224, 224, 1)',
                },
            },
        },
    },
});