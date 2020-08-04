import React from "react";
import './Meme.css';

function Meme({id, img_url, textTop, textBottom, deleteMeme}) {

    function handleClick() {
        deleteMeme(id);
    }    

    return (
        <li className="Meme">
        <div className="Meme-container">
            <img src={img_url} />
            <p className="text-top">{textTop}</p>
            <p className="text-bottom">{textBottom}</p>
            <button onClick={handleClick}>Remove</button>
        </div>
        </li>
    );
}

export default Meme;
