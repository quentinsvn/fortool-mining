import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box
} from '@material-ui/core';
import General from './categories/General';
import Credits from './categories/Credits';
import Shop from './categories/Shop';
import Account from './categories/Account';
import Premium from './categories/Premium';
import Help from './categories/Help';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}


const useStyles = makeStyles(theme => ({
  root: {},
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  cardFaq: {
    padding: 0,
  }
}));

const FAQCard = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <CardHeader
          subheader="Liste des questions"
          title="FAQ"
        />
        <Divider />
        <CardContent className={classes.cardFaq}>
        <AppBar position="static" color="default" style={{boxShadow: 'none'}}>
          <Tabs
            value={value}
            style={{backgroundColor: '#ffffff' }}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Général" {...a11yProps(0)} />
            <Tab label="Crédits" {...a11yProps(1)} />
            <Tab label="Boutique" {...a11yProps(2)} />
            <Tab label="Compte" {...a11yProps(3)} />
            <Tab label="Premium" {...a11yProps(4)} />
            <Tab label="Aide" {...a11yProps(5)} />
          </Tabs>
        </AppBar>
          <TabPanel value={value} index={0}>
            <General />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Credits />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Shop />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Account />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Premium />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Help />
          </TabPanel>
        </CardContent>
      </form>
    </Card>
  );
};

FAQCard.propTypes = {
  className: PropTypes.string
};

export default FAQCard;
