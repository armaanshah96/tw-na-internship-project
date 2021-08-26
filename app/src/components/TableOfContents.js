/*
 * © 2021 Thoughtworks, Inc.
 */

import React, {useState} from 'react';
import SituationalQuestions from "./SituationalQuestions";
import Button from '@material-ui/core/Button';

function TableOfContents(){
    const [showButton, setShowButton] = useState(false)
    function clickHandler() {
        setShowButton(true);
    }


    return(
        <div >
            {(showButton == false)?  <Button variant="contained" color="secondary" onClick={clickHandler}>Know Your Rights</Button>:null}
            {showButton && <SituationalQuestions/>}


        </div>
    )
}

export default TableOfContents;
