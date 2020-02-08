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

export default function Credits() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Que sont les Fortcoin ?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Le Fortcoins est la monnaie du site, c'est avec ces derniers que vous pouvez acheter des objets 
            dans la boutique. 
            Pour informations: 10 Fortcoins = 0.03 € Mais vous pouvez survoller votre solde pour le convertir.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Puis-je transférais des coins sur un autre compte ?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Il est possible de transférer des forcoins sur un autre compte, 
            vous pouvez envoyer des Fortcoins à un ami en cliquant ici, 
            Il vous suffit d'entrée son identifiant Fortool et de choisir le montant.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Mes coins ont disparu, et maintenant ?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Assurez-vous que personne autour de vous n'a accès à votre compte et n'a perdu votre solde de jeu. 
            Veillez également à la sécurité de votre compte en n’installant jamais de virus ni d’extension de navigateur nuisible. 
            Enfin, nous ne remboursons pas ces types d’incidents. 
            Nous ne remboursons que ce que nous pouvons voir et prouver dans nos journaux / base de données.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Comment gagner des coins gratuitement ?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Le site vous propose de nombreux moyens de gagner des coins gratuitement, 
            vous pouvez regardent des vidéos/publicités avec Tipeeestream et Utip. 
            Vous pouvez aussi remplir des sondages et vous inscrire sur des sites. 
            Nous avons développé pour nos amis utilisateurs de Windows, 
            une application qui vous permet de transformer votre puissance informatique 
            en forçait (minage de cryptmonnaies).
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
