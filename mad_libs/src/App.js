import './App.css';
import { useState } from 'react';
import { InputTextField } from './InputTextField';
import { Output } from './Output';

function App() {
  //state
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");

  const [showOutput, setShowOutput] = useState(false);
  return (
    <div className="App">
      <h1>Mad Libs</h1>
      <h2>Inputs</h2>

      
        <InputTextField get={word1} set={setWord1} partOfSpeech="Adverb"/>
        <InputTextField get={word2} set={setWord2} partOfSpeech="Noun"/>
        <InputTextField get={word3} set={setWord3} partOfSpeech="Verb"/>
        <button onClick={() => {
        setShowOutput(!showOutput);
        }}>
          {!showOutput ? "Show Output!" : "Hide Output."}
          </button>
     

      <h2>Outputs</h2>
      {showOutput && (
        <Output adverb={word1} noun={word2} verb={word3}/>
      )}
      
      
    </div>
  );
}

export default App;
