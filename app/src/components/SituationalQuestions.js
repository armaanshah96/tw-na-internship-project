/*
 * © 2021 Thoughtworks, Inc.
 */

import React, {useState} from 'react';
import KnowYourRights from "./KnowYourRights";
import Button from "@material-ui/core/Button";
import {Grid} from "@material-ui/core";


function SituationalQuestions() {

    const [showUsers, setShowUsers] = useState(true)

    function clickHandlerUsers() {
        setShowUsers(false);
    }

    return (
        <div>
            {showUsers ? <Grid container spacing={1}
  direction="row"
  justifyContent="center"
  alignItems="center" >
                <Grid item >
                    <Button variant="contained" color="secondary" onClick={clickHandlerUsers}>Community Member User</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" onClick={clickHandlerUsers}>Targeted User</Button>
                </Grid>
                </Grid> : <KnowYourRights/>}

        </div>
    )
}



export default SituationalQuestions;
