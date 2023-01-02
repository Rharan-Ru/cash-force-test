import React from 'react';
import { Container,Typography } from '@mui/material';
import InsightsIcon from '@mui/icons-material/Insights';

const NotesHeader = ({ classes }) => {
    return (
        <div>
            <Container className={classes.container}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <InsightsIcon className={classes.icon} />
                <Typography variant="h5" component="h6">
                    Notas fiscais
                </Typography>
                </div>
                <Typography className={classes.subtitle} variant="caption">
                    Visualize as notas fiscais que você tem.
                </Typography>
            </Container>
        </div>
    );
};

export default NotesHeader;