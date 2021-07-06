import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import KnowYourRights from "./KnowYourRights";

function SituationalQuestions() {
  const [showContent,setShowContent]=useState(false)
  const [showUsers,setShowUsers]=useState(true)
    function clickHandler(){
      setShowUsers(true)
    }
    return (<div>

        {/*{(showUsers==false)?<button onClick={clickHandler}>Targeted User1</button>:null}*/}
        {showUsers?
            <Button variant="contained" color={"primary"} >Community Member User </Button>:null}
          {showUsers?
          <Button variant="contained" color={"primary"} >Targeted User </Button>:null}

    </div>
    )
}

export default SituationalQuestions;
