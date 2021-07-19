import React, {useState} from 'react';
import knowYourRightsService from "../services/knowYourRightsService";
import {KnowYourRightsType} from "./TableOfContents";




const KnowYourRights = (props:any) => {


    return (
        <p>{props.data.map((x:any) => {
            return(
                 <div>
                     <h2>{x.title}</h2>
                     <h3>{x.summary}</h3>
                 </div>)})}
        </p>

    );
}
export default KnowYourRights;
