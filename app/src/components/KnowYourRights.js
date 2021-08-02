import React, {useState, useEffect} from 'react';
import knowYourRightsService from "../services/knowYourRightsService";
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {green} from "@material-ui/core/colors";
import {Box} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({

        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },

    })
);


function KnowYourRights() {

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
        <div data-testid="kyrContent">

            <h1> Know Your Rights </h1>
            {knowYourRightsData?.map((x) => {
                return (
                    <div key={x.id} className={classes.root}>
                        <Box mx={5} my={2}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <h5>{x.title}
                                        <Typography className={classes.heading}>
                                            Summary: {x.summary}
                                        </Typography>
                                    </h5>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Typography className={classes.heading}> Additional Info: </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography className={classes.heading}> References: </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </div>
                )
            })}
        </div>

    )
}


export default KnowYourRights;
