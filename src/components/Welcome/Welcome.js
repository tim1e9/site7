import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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

export default function Welcome() {
    const classes = useStyles();

    return(
        <div>
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
    );
}
