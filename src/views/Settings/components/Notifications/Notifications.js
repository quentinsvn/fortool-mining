import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  Switch,
  ListItemText,
  ListItemSecondaryAction,
  Slider,
  Typography,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Brightness4Icon from '@material-ui/icons/Brightness4';


const useStyles = makeStyles(() => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  },
}));

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

const Notifications = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <CardHeader
          subheader="Gérer les paramètres du logiciel"
          title="Paramètres"
        />
        <Divider />
        <CardContent>
        <List subheader={<ListSubheader>Général</ListSubheader>} className={classes.root}>
          <ListItem>
            <ListItemIcon>
              <PowerSettingsNewIcon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-wifi" primary="Lancer dès le démarrage de Windows" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                color="primary"
                onChange={handleToggle('wifi')}
                checked={checked.indexOf('wifi') !== -1}
                inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Brightness4Icon />
            </ListItemIcon>
            <ListItemText id="switch-list-label-bluetooth" primary="Thème sombre" />
            <ListItemSecondaryAction>
              <Switch
                color="primary"
                edge="end"
                onChange={handleToggle('bluetooth')}
                checked={checked.indexOf('bluetooth') !== -1}
                inputProps={{ 'aria-labelledby': 'switch-list-label-bluetooth' }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>

        <List subheader={<ListSubheader>Capacités</ListSubheader>} className={classes.root}>
          <Typography style={{marginLeft: 15}} variant="subtitle2">En diminuant les capacités de vos composants, vos profits diminueront également.</Typography>
          <br/><Typography style={{marginLeft: 15}} variant="overline">Carte Graphique</Typography>
          <ListItem>
            <Slider
              defaultValue={80}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-always"
              step={10}
              marks={marks}
              valueLabelDisplay="auto"
            />
          </ListItem>
          <Typography style={{marginLeft: 15}} variant="overline">Processeur</Typography>
          <ListItem>
            <FormControlLabel control={<Checkbox 
              color="primary" 
              value="checkedBox"
              />} label="Activer" />
          </ListItem>  
          <ListItem>
            <Slider
              defaultValue={20}
              disabled
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-always"
              step={10}
              marks={marks}
              valueLabelDisplay="off"
            />
          </ListItem>
        </List>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="outlined"
          >
            Enregistrer
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

Notifications.propTypes = {
  className: PropTypes.string
};


export default Notifications;
