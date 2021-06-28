import React, { useState} from 'react';
import KnowYourRights from "./KnowYourRights";


function TableOfContents(){
    const [showContent, setShowContent] = useState(false)

    function clickHandler(){
        setShowContent(true);
    }
    return(
        <div >
            {(showContent == false)? <button onClick={clickHandler}>Know Your Rights</button>:null}
            {showContent && <KnowYourRights/>}
        </div>
    )
}

export default TableOfContents;
