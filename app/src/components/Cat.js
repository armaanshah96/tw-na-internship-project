/*
 * © 2021 Thoughtworks, Inc.
 */

import React, {useState} from 'react';
import catService from '../services/catService'

function Cat() {

    /*
        Key concepts: Promise + `.then` syntax, useState, conditional rendering in react

        CHECKPOINT: can you explain how getCatData is used in this react component? When is it triggered? What happens
        when getCatData is triggered?
        CHECKPOINT: Try to get the application to work. Ask teammates if you don't see a result after clicking the Cat Info button

        Topics uncovered: CatType and how Typescript plays a role here - if you have time try to understand this piece
     */

    const [catData, setCatData] = useState(undefined)

    function getCatData() {
        catService.getGrumpiestCat().then(json => setCatData(json))
    }

    return (
        <div>
            { catData && <h1>Grumpiest cat level is: { catData.grumpiness }</h1>}
            { !catData && <p>click here for info on the level of grumpiness for the grumpiest cat</p> }
            { !catData && <button onClick={ getCatData }>Cat Info!</button> }
        </div>
    );
}

export default Cat;
