import React, {useState, useEffect} from 'react';
import knowYourRightsService from "../services/knowYourRightsService";

function KnowYourRights (){

    const [knowYourRightsData, setKnowYourRightsData] = useState(undefined)

    useEffect(() => {
        getKnowYourRightsData();
      }, []);

      const getKnowYourRightsData = async () => {
        const result = await knowYourRightsService.getKnowYourRightsContent();
        setKnowYourRightsData(result);
      }

      return (
        <div data-testid="kyrContent" >
            <h1> Know Your Rights </h1>
            {knowYourRightsData?.map((x) => {
            return(
                 <div key={x.id} >

                    <ul>
                        <header >Title: {x.title}</header>
                        <li >Summary: {x.summary}</li>
                    </ul>

                 </div>)})}
        </div>
    );
}

export default KnowYourRights;
