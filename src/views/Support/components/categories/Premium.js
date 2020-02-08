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

export default function Premium() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Comment devenir Premium ?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Pour devenir premium il s'offre à vous deux choix. 
            Sois en boostant notre serveur Discord 
            ou bien en payant un abonnement au tarif de 4€/mois depuis la boutique du site.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Quels sont les avantages du premium ?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            En étant pemium vous bénéficier de nombreux avantages comme :
            <ul style={{listStyle: 'none'}}>
              <li>► Bonus de 3%</li>
              <li>► Cashback PayPal</li>
              <li>► Identifiant personnalisable</li>
              <li>► Création de caisses</li>
              <li>► Badge premium</li>
              <li>► 5% d'XP en plus</li>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Comment me désabonner ?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Le premium est à renouveler tous les mois et ne vous engage à rien. 
            Si vous souhaitez vous désabonner, il suffit d'attendre la fin de votre période mensuelle 
            ou de unbooster notre serveur. 
            En faisant cela, vous ne bénéficierez plus des avantages conférés par celui-ci.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
