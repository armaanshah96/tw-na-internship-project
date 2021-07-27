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
      <><Button variant="contained" color="secondary" onClick={clickHandlerUsers}>Community Member User</Button>
        <Button variant="contained" color="secondary" onClick={clickHandlerUsers}>Targeted User</Button></>:
        <KnowYourRights/>}
    </Box>
    )
};

export default SituationalQuestions;
