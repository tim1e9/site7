import './App.css';


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  introtext: {
    textAlign: 'left',
    marginLeft: '50px',
    marginBottom: '100px',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <Typography variant="h4">
          Fishing Tours
        </Typography>
      </div>
      <div>
        <Typography className={classes.introtext}>
          Join us for a truly spectacular experience!
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">
              Inshore Fishing (Half day)
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
        <Paper className={classes.paper}>
        <Typography variant="h6">
              Gulf Dolphin Tour (Full day)
            </Typography>
            </Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default App;
