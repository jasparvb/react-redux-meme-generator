import React from 'react';
import './App.css';
import { useSelector } from "react-redux";

function App() {
const memes = useSelector(store => store.memes);



const memeList = () => (
  memes.map((meme, i) => <Meme 
      key={i} 
      id={i}
      textTop={meme.textTop}
      textBottom={meme.textBottom}
      img_url={meme.img_url}
      deleteMeme={deleteMeme} 
    />
  )
);

  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <ul className="App-meme-container">
      {memeList}
      </ul>
    </div>
  );
}

export default App;
