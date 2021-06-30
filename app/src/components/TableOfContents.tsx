import React, { useState} from 'react';
import KnowYourRights from "./KnowYourRights";
import Button from "@material-ui/core/Button";


function TableOfContents(){
    const [showContent, setShowContent] = useState(false)
    function clickHandler(){
        setShowContent(true);
    }
    return(
        <div >
            {(showContent == false)? <button onClick={clickHandler}>Know Your Rights</button>:null}
            {showContent && <KnowYourRights/>}
            {showContent?
            <Button variant="contained" color={"primary"} >Targeted User</Button>:null}
            {showContent?
                <Button variant="contained" color={"primary"} >Community Member User </Button>:null}

        </div>
    )
}

export default TableOfContents;
