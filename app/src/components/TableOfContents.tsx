import React, { useState} from 'react';
import SituationalQuestions from "./SituationalQuestions";


function TableOfContents(){
    const [showButton, setShowButton] = useState(false)
    function clickHandler(){
        setShowButton(true);
    }

    return(
        <div >
            {(showButton == false)?  <button onClick={clickHandler}>Know Your Rights</button>:null}
            {showButton && <SituationalQuestions/>}
        </div>
    )
}

export default TableOfContents;
