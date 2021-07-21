import React, { useState} from 'react';
<<<<<<< HEAD
import SituationalQuestions from "./SituationalQuestions";


function TableOfContents(){
    const [showButton, setShowButton] = useState(false)
    function clickHandler(){
        setShowButton(true);
=======
import KnowYourRights from "./KnowYourRights";


function TableOfContents(){

    const [showContent, setShowContent] = useState(false)

    function clickHandler(){
        setShowContent(true);

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
