import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles(() => ({
  root: {},
  image: {
    color: '#C0C0C0'
  }
}));

const Level3Card = props => {
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
          title="Rare"
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
          primary="600 Fortcoins/30 Jours"
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
            primary="+20 Fortcoins/jour"
          />
        </ListItem>
        </CardContent>
      </form>
    </Card>
  );
};

Level3Card.propTypes = {
  className: PropTypes.string
};

export default Level3Card;
