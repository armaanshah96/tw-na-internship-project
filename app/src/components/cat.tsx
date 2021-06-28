import React, { useState} from 'react';
import catService from '../services/catService'

function Cat() {
    const [catPicture, setCatPicture] = useState<{file: string} | undefined>(undefined)

    function getCatData() {
      catService.getCatPic().then(json => setCatPicture(json))
    }

    return (
      <div >
        {/*{catPicture && <img src={catPicture.file} className={"App-Cat"} alt={"A cat !"} />}*/}
        <p>Click here to see a cat :3</p>
        <button onClick={getCatData}>Know Your Rights</button>

    </div>
    );
}

export default Cat;
