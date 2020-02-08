import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Help() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Que ce passe-t-il si je n'arrive pas à m'arrêter ?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Comme toutes les formes de jeu, le jeu en ligne peut devenir une dépendance 
            qui peut avoir de graves effets négatifs sur votre vie. 
            Si vous perdez plus que ce que vous aviez prévu ou ne pouvez pas vous permettre 
            en toute sécurité et que vous avez du mal à contrôler votre temps et / ou votre argent au jeu, 
            consultez ces sites pour trouver des informations susceptibles de vous aider.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Comment nous contacter ?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Vous pouvez nous contacter depuis notre serveur Discord ou bien 
            par formulaire web depuis la page contact. 
            Vous recevrez une réponse dans les heures qui suivent.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}
