import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuidv4 from "uuid/v4";

const INITIAL_FORM = {
    textTop: '',
    textBottom: '',
    url: ''
}

/* Render two inputs to change numbers in the redux store. */
function AddMemeForm() {
    const [inputs, setInputs] = useState(INITIAL_FORM);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const { name, value } = evt.target;
        setInputs(inputs => ({ ...inputs, [name]: +value }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: "ADD_MEME", ...inputs, id: uuidv4() });
        setInputs(INITIAL_FORM);
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label for="img">Image URL:</label>
            <input
                type="text"
                value={inputs.img}
                name="img"
                id="img"
                onChange={handleChange}
            />
            <label for="textTop">Top text:</label>
            <input
                type="text"
                value={inputs.textTop}
                name="textTop"
                id="textTop"
                onChange={handleChange}
            />
            <label for="textBottom">Bottom text:</label>
            <input
                type="text"
                value={inputs.textBottom}
                name="textBottom"
                id="textBottom"
                onChange={handleChange}
            />
            <button type="submit">Add Meme</button>
        </form>
        </div>
    );
}

export default AddMemeForm;
