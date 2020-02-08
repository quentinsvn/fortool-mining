import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  content: {
    padding: 0,
  },
  image: {
    height: 30,
    width: 30,
    color: theme.palette.success.main,
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestProducts = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [products] = useState(mockData);

  const [dense] = React.useState(false);
  const [secondary] = React.useState(false);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Mes avantages"
      />
      <Divider />
      <CardContent className={classes.content}>
        <List dense={dense}>
            <ListItem style={{marginTop: 10}}>
              <ListItemIcon>
                <CheckCircleIcon className={classes.image}  />
              </ListItemIcon>
              <ListItemText
                primary="Cashback PayPal"
                secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon className={classes.image}  />
              </ListItemIcon>
              <ListItemText
                primary="3% de chance de gagner"
                secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon className={classes.image}  />
              </ListItemIcon>
              <ListItemText
                primary="Identifiant personnalisable"
                secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon className={classes.image}  />
              </ListItemIcon>
              <ListItemText
                primary="Badge premium"
                secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon className={classes.image}  />
              </ListItemIcon>
              <ListItemText
                primary="Bonus de 5% XP"
                secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

LatestProducts.propTypes = {
  className: PropTypes.string
};

export default LatestProducts;
