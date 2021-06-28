import React, { useState} from 'react';
import KnowYourRights from "./KnowYourRights";
import catService from '../services/catService'

// function Cat() {
//     const [catPicture, setCatPicture] = useState<{file: string} | undefined>(undefined)
//
//     function getCatData() {
//       catService.getCatPic().then(json => setCatPicture(json))
//     }
//
//     return (
//       <div >
//         {catPicture && <KnowYourRights/>/*<img src={catPicture.file} className={"App-Cat"} alt={"A cat !"} />*/}
//         <p>Click here to see a cat :3</p>
//           {(catPicture == undefined)? <button onClick={getCatData}>Know Your Rights</button>:null/*dependent on that catPicture is undefined when first rendered*/}
//     </div>
//     );
// }

function Cat(){
    const [showContent, setShowContent] = useState(false)

    function clickHandler(){
        setShowContent(true);
    }
    return(
        <div >
            {(showContent == false)? <button onClick={clickHandler}>Know Your Rights</button>:null}
            {showContent && <KnowYourRights/>}
        </div>
    )
}

export default Cat;
