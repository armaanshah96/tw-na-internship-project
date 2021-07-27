import React, {useState, useEffect} from 'react';
import knowYourRightsService from "../services/knowYourRightsService";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({

  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  changeColor:{
  flexDirection: "column"

  }

})
);



function KnowYourRights (){

    const [knowYourRightsData, setKnowYourRightsData] = useState(undefined)
    const classes = useStyles();

    useEffect(() => {
        getKnowYourRightsData();
      }, []);

      const getKnowYourRightsData = async () => {
        const result = await knowYourRightsService.getKnowYourRightsContent();
        setKnowYourRightsData(result);
      }
      return (
                <div data-testid="kyrContent" >

                    <h1> Know Your Rights </h1>
                    {knowYourRightsData?.map((x) => {
                        return (
                            <div className={classes.root}>
                                <Accordion >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Title: {x.title} Summary: {x.summary} </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>

                                         <Typography > Additional Info: </Typography>
                                         <Typography > References: </Typography>

                                    </AccordionDetails>
                                </Accordion>
                            </div>


                        )})}
                        </div>

                    )}



export default KnowYourRights;
