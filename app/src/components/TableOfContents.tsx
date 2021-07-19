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

export type KnowYourRightsType = { id: number, title: string, summary: string} | undefined;


function TableOfContents(){

const db = [
    {
        title: 'Remain silent',
        summary: 'Have right remain silent',
        addInfo: ['Dummy1', 'Dummy2', 'Dummy3'],
    },
    {
        title: 'Refuse search',
        summary: 'You have the right to refuse search',
        addInfo: ['No police inside', 'Police shouldnt search car', 'Hello']
    }
];

    const [showContent, setShowContent] = useState(false)
    const [knowYourRightsData, setKnowYourRightsData] = useState<KnowYourRightsType>(undefined)

    function clickHandler(){
        getKnowYourRightsData();
        setShowContent(true);

    }
    function getKnowYourRightsData() {
        knowYourRightsService.getKnowYourRightsContent().then(temp => setKnowYourRightsData(temp))

    }

    return(
        <div >
            {(showButton == false)?  <button onClick={clickHandler}>Know Your Rights</button>:null}
            {showButton && <SituationalQuestions/>}


            {/*{(showContent === false)? <button onClick={clickHandler}>Know Your Rights</button>:null}
            {showContent && <KnowYourRights data= {knowYourRightsData}/>}*/}

        </div>
    )
}

export default TableOfContents;
