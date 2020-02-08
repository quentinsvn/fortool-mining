import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { StatusBullet } from 'components';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Tooltip,
  TableSortLabel,
  TableBody
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  },
  inner: {
    minWidth: 800
  },
  status: {
    marginRight: theme.spacing(1)
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  content: {
    padding: 0
  },
}));

const statusColors = {
  Envoyé: 'success',
  'En cours': 'info',
  refunded: 'danger'
};

const LatestSales = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [orders] = useState(mockData);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <Button
            size="small"
            variant="text"
          >
            Période <ArrowDropDownIcon />
          </Button>
        }
        title="Activités récentes"
      />
      <Divider />
      <CardContent className={classes.content}>
        <div className={classes.chartContainer}>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell sortDirection="desc">
              <Tooltip
                enterDelay={300}
                title="Sort"
              >
                <TableSortLabel
                  active
                  direction="desc"
                >
                  Date
                </TableSortLabel>
              </Tooltip>
            </TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(order => (
            <TableRow
              hover
              key={order.id}
            >
              <TableCell>{order.ref}</TableCell>
              <TableCell>{order.customer.name}</TableCell>
              <TableCell>
                {order.createdAt}
              </TableCell>
              <TableCell>
                <div className={classes.statusContainer}>
                  <StatusBullet
                    className={classes.status}
                    color={statusColors[order.status]}
                    size="sm"
                  />
                  {order.status}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          Voir plus <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

LatestSales.propTypes = {
  className: PropTypes.string
};

export default LatestSales;
