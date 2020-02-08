import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar, 
  ListItemText,
} from '@material-ui/core';

 
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '300px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: theme.palette.icon
  }
}));

const UsersByDevice = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  // eslint-disable-next-line
  const theme = useTheme();


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Mes composants"
      />
      <Divider />
      <CardContent>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="CG" src="https://advanti.com/images/category/gpu.png" />
            </ListItemAvatar>
            <ListItemText primary="NVIDIA GTX 1060 6GB" secondary="Carte Graphique" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="CPU" src="https://cdn.pixabay.com/photo/2017/07/09/20/48/cpu-2488091_960_720.png" />
            </ListItemAvatar>
          <ListItemText primary="Intel i5 4460s" secondary="Processeur" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="RAM" src="https://image.flaticon.com/icons/svg/1176/1176868.svg" />
          </ListItemAvatar>
          <ListItemText primary="8GB" secondary="RAM" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="MEMORY" src="https://image.flaticon.com/icons/png/512/73/73466.png" />
          </ListItemAvatar>
          <ListItemText primary="1TO" secondary="Disque Dur" />
        </ListItem>
      </List>
      </CardContent>
    </Card>
  );
};

UsersByDevice.propTypes = {
  className: PropTypes.string
};

export default UsersByDevice;
