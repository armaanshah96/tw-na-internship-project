import React, {useState} from 'react';
import KnowYourRights from "./KnowYourRights";

function SituationalQuestions() {
  const [showUsers,setShowUsers]=useState(true)
  function clickHandlerUsers(){
    setShowUsers(false);
  }
    return (<>
          {showUsers?<><button onClick={clickHandlerUsers}>Community Member User</button>
            <button onClick={clickHandlerUsers}>Targeted User</button></>:<KnowYourRights/>}
        </>
    )
};

export default SituationalQuestions;
