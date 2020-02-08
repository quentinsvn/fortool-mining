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
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const useStyles = makeStyles(theme => ({
  root: {},
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  image: {
    color: green[500]
  }
}));

const Level1Card = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <CardHeader
          subheader="Avantages du niveau"
          title="Uncommon"
          avatar={
            <Avatar className={classes.green}>
              <CheckIcon /> 
            </Avatar>
          }
        />
        <Divider />
        <CardContent>
        <ListItem style={{marginTop: 10}}>
          <ListItemIcon>
            <CheckCircleIcon className={classes.image}  />
          </ListItemIcon>
          <ListItemText
            primary="120 Fortcoins/30 Jours"
          />
          </ListItem>
          <ListItem style={{marginTop: 10}}>
            <ListItemIcon>
              <CheckCircleIcon className={classes.image}  />
            </ListItemIcon>
            <ListItemText
              primary="+20% de bénéfice"
            />
          </ListItem>
          <ListItem style={{marginTop: 10}}>
            <ListItemIcon>
              <CheckCircleIcon className={classes.image}  />
            </ListItemIcon>
            <ListItemText
              primary="+4 Fortcoins/jour"
            />
          </ListItem>
        </CardContent>
      </form>
    </Card>
  );
};

Level1Card.propTypes = {
  className: PropTypes.string
};

export default Level1Card;
