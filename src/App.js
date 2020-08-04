import React from 'react';
import './App.css';
import Meme from './Meme';
import AddMemeForm from './AddMemeForm';
import { useSelector, useDispatch } from "react-redux";

function App() {
  const memes = useSelector(store => store.memes);
  const dispatch = useDispatch();

  function deleteMeme(id) {
    dispatch({type: "DELETE_MEME", id });
  }

  const memeList = memes.map(meme => (
    <Meme 
      key={meme.id} 
      id={meme.id}
      textTop={meme.textTop}
      textBottom={meme.textBottom}
      img_url={meme.img_url}
      deleteMeme={deleteMeme} 
    />
  ));

  return (
    <div className="App">
      <div className="App-header">
        <h1>Meme Generator</h1>
        <AddMemeForm />
      </div>
      <div className="App-main">
        <ul className="App-meme-container" id="newMemes">
        {memeList}
        </ul>
      </div>
    </div>
  );
}

export default App;
