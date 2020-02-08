import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import AdvancementCard from './components/AdvancementCard';
import Level1Card from './components/Level1Card';
import Level2Card from './components/Level2Card';
import Level3Card from './components/Level3Card';
import Level4Card from './components/Level4Card';
import Level5Card from './components/Level5Card';
import Level6Card from './components/Level6Card';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  iframe: {
    width: '100%', 
    minHeight: 640,
    border: 0
  }
}));

const Icons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
      container
      spacing={4}
      >
        <Grid
          item
          md={12}
          xs={12}
        >
          <AdvancementCard/>
        </Grid>

        <Grid
          item
          md={4}
          xs={12}
        >
          <Level1Card/>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
        >
          <Level2Card/>
        </Grid>

        <Grid
          item
          md={4}
          xs={12}
        >
          <Level3Card/>
        </Grid>


        <Grid
          item
          md={4}
          xs={12}
        >
          <Level4Card/>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
        >
          <Level5Card/>
        </Grid>

        <Grid
          item
          md={4}
          xs={12}
        >
          <Level6Card/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Icons;
