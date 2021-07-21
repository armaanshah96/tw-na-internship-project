import React, {useState} from 'react';
import knowYourRightsService from "../services/knowYourRightsService";


export type KnowYourRightsType = [{ id: number, title: string, summary: string}] | undefined;

function KnowYourRights (){

    const [knowYourRightsData, setKnowYourRightsData] = useState<KnowYourRightsType>(undefined)


    function getKnowYourRightsData() {
        knowYourRightsService.getKnowYourRightsContent().then(temp => setKnowYourRightsData(temp))
    }



      return (
        <div>
            <h1> Know Your Rights </h1>
            {getKnowYourRightsData()/*this func populates knowYourRightsData*/}
            {knowYourRightsData?.map((x) => {
            return(
                 <div>

                    <ul>
                        <header>Title: {x.title}</header>
                        <li>Summary: {x.summary}</li>
                    </ul>

                 </div>)})}
        </div>



    );
}

export default KnowYourRights;
