import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    title: {
      flexGrow: 1,
    },
    introtext: {
      textAlign: 'left',
      marginLeft: '50px',
      marginBottom: '100px',
    }
  }));
  
export default function AppHeader({buttonClicked}) {
    const classes = useStyles();

    const handleClickLogin = () => {
        buttonClicked('login')
    }

    const handleDrawerOpen = () => {
      buttonClicked('drawer');
    }

    return(
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" onClick={handleDrawerOpen} className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} color="inherit">
              Fish All Day
            </Typography>
            <Button color="inherit" onClick={handleClickLogin}>Login</Button>
          </Toolbar>
        </AppBar>
     </div>
  
    );
}