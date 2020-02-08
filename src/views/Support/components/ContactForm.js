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
  TextField,
  CardActions,
  Button
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {},
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
}));

const ContactForm = props => {
  const { className, ...rest } = props;

  const classes = useStyles();


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <CardHeader
          subheader="Formulaire de contact"
          title="Contact"
        />
        <Divider />
        <CardContent>
            <TextField
            id="outlined-full-width"
            label="Sujet"
            placeholder="Titre de votre sujet"
            fullWidth
            margin="auto"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
          id="outlined-multiline-static"
          label="Message"
          fullWidth
          multiline
          style={{marginTop: 20}}
          rows="7"
          placeholder="Votre message"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="outlined"
          >
            Envoyer
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string
};

export default ContactForm;
