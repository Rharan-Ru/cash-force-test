import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Grid from '@mui/material/Grid';
import { AppBar, Divider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme, useStyles } from './styles';
import NotesHeader from '../../components/CashForceComponents/NotesHeader';
import SiderBar from '../../components/SiderBar';
import TableNotes from '../../components/CashForceComponents/TableNotes';

const CashForcePage = () => {
    const classes = useStyles();
    const [ orders, setOrders ] = useState([])
    useEffect(() => {
        const getOrders = async () => {
            const {data} = await api.get("/order")
            setOrders(data)
            console.log(data)
        }
        getOrders()
    }, [])
    return (
        <>
        <ThemeProvider theme={theme}>
            <Grid container className={classes.gridContainer}>
                <Grid item xs={2} className={classes.sideBar}>
                    <SiderBar classes={classes} />
                </Grid>
                <Grid item xs={10} className={classes.main}>
                    <AppBar className={classes.header} position="static">
                    </AppBar>
                    <Divider />
                    <NotesHeader classes={classes} />
                    <TableNotes data={orders} />
                </Grid>
            </Grid>
        </ThemeProvider>
        </>
    );
};

export default CashForcePage;