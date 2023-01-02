import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import InsightsIcon from '@mui/icons-material/Insights';

const SiderBar = ({ classes }) => {
    return (
        <div>
            <img 
                className={classes.logo}
                src="https://cashforce.com.br/wp-content/themes/cashforce/assets/images/logo-cashforce.svg" 
                alt=""
            >
            </img>
            <List component="nav">
                <ListItem
                    disablePadding={true}
                    button 
                    className={classes.ligth}
                >
                    <InsightsIcon className={classes.icon} />
                    <ListItemText primary="Notas Fiscais" />
                </ListItem>
            </List>
        </div>
    );
};

export default SiderBar;