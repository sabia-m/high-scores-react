import React from 'react';
//import logo from './logo.svg';
import './App.css';
import allCountryScores from './scores'
import HighScoreTable from './ScoresTable'

function App() {
return (
  <div>
    <HighScoreTable allScores = {allCountryScores}/>
  </div>
)
  
}

export default App;

  