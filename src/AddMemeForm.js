import React, { useState } from "react";
import { useDispatch } from "react-redux";

/* Render two inputs to change numbers in the redux store. */
function AddMemeForm() {
  const [inputs, setInputs] = useState({ num1, num2 });
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setInputs(inputs => ({ ...inputs, [name]: +value }));
  };


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
        <button type="submit">
          Add Meme
        </button>
      </form>
    </div>
  );
}

export default AddMemeForm;
