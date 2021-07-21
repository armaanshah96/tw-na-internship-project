import React, { useState} from 'react';
<<<<<<< HEAD
import SituationalQuestions from "./SituationalQuestions";


function TableOfContents(){
    const [showButton, setShowButton] = useState(false)
    function clickHandler(){
        setShowButton(true);
=======
import KnowYourRights from "./KnowYourRights";
import knowYourRightsService from "../services/knowYourRightsService";




function TableOfContents(){



    const [showContent, setShowContent] = useState(false)

    function clickHandler(){
        setShowContent(true);
<<<<<<< HEAD

    }
    function getKnowYourRightsData() {
        knowYourRightsService.getKnowYourRightsContent().then(temp => setKnowYourRightsData(temp))

    }

    return(
        <div >
            {(showButton == false)?  <button onClick={clickHandler}>Know Your Rights</button>:null}
            {showButton && <SituationalQuestions/>}


            {/*{(showContent === false)? <button onClick={clickHandler}>Know Your Rights</button>:null}
            {showContent && <KnowYourRights  />}*/}

        </div>
    )
}

export default TableOfContents;
