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

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>