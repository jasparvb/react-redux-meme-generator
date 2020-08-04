import React from "react";

function Meme({id, img_url, textTop, textBottom, deleteMeme}) {

    function handleClick() {
        deleteMeme(id);
    }    

    return (
        <li className="Meme">
        <div>
            <img src={img_url} />
            <p>{textTop}</p>
            <p>{textBottom}</p>
            <button onClick={handleClick}>Remove</button>
        </div>
        </li>
    );
}

export default Meme;
