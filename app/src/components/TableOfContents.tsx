import React, { useState} from 'react';
import KnowYourRights from "./KnowYourRights";
import SituationalQuestions from "./SituationalQuestions";


function TableOfContents(){
    const [showContent, setShowContent] = useState(false)
    const [showUsers,setShowUsers]=useState(false)
    function clickHandler(){
        setShowContent(true);
    }
    function clickHandlerUsers(){
        setShowUsers(true);
    }
    /*
    first show knowyourright button
    if(KYR clicked) -> show Users (targeted / community). Do not show KYR content
    if(User button clicked) -> show KYR Content
     */
    return(
        <div >
            {(showContent == false)?  <button onClick={clickHandler}>Know Your Rights</button>:null}
            {(showContent== true && showUsers== false )?<button onClick={clickHandlerUsers}>Community Member User</button>:null}
            {(showContent== true && showUsers== false)?<button onClick={clickHandlerUsers}>Targeted User</button>:null}
            {showUsers && <KnowYourRights/>}

        </div>
    )
}

export default TableOfContents;
