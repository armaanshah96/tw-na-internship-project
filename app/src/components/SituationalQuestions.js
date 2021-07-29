import React, {useState} from 'react';
import KnowYourRights from "./KnowYourRights";
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";



function SituationalQuestions() {

  const [showUsers,setShowUsers]=useState(true)
  function clickHandlerUsers(){
    setShowUsers(false);
  }
    return (
    <Box component="span" m={1}>
    {showUsers?
      <Box mx={5} my={6}><Button variant="contained" color="secondary" onClick={clickHandlerUsers}>Community Member User</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" color="secondary" onClick={clickHandlerUsers}>Targeted User</Button></Box>:
        <KnowYourRights/>}
    </Box>
    )
};

export default SituationalQuestions;
