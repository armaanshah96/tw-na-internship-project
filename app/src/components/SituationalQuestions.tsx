import React, {useState} from 'react';
import KnowYourRights from "./KnowYourRights";

function SituationalQuestions() {
  const [showUsers,setShowUsers]=useState(false)
  function clickHandlerUsers(){
    setShowUsers(true);
  }
    return (<div>
          {(showUsers== false )?<button onClick={clickHandlerUsers}>Community Member User</button>:null}
          {(showUsers== false)?<button onClick={clickHandlerUsers}>Targeted User</button>:null}
          { showUsers && <KnowYourRights/>}
        </div>
    )
}

export default SituationalQuestions;
