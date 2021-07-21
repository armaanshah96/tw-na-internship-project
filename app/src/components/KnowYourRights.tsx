import React, {useState} from 'react';
import knowYourRightsService from "../services/knowYourRightsService";


export type KnowYourRightsType = [{ id: number, title: string, summary: string}] | undefined;

function KnowYourRights (){

    const [knowYourRightsData, setKnowYourRightsData] = useState<KnowYourRightsType>(undefined)


    function getKnowYourRightsData() {
        knowYourRightsService.getKnowYourRightsContent().then(temp => setKnowYourRightsData(temp))
    }



      return (
        <p>
            {getKnowYourRightsData()/*this func populates knowYourRightsData*/}
            {knowYourRightsData?.map((x) => {
            return(
                 <div>
                     <h2>{x.title}</h2>
                     <h3>{x.summary}</h3>
                 </div>)})}
        </p>

    );
}

export default KnowYourRights;
