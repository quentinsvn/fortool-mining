import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import ContactForm from './components/ContactForm';
import FAQCard from './components/FAQCard';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));


const Support = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
            <Grid
              item
              sm={5}
              xs={12}
            >
              <ContactForm/>
            </Grid>
            <Grid
              item
              sm={7}
              xs={12}
            >
              <FAQCard/>
            </Grid>
      </Grid>
    </div>
  );
};

export default Support;
