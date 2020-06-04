import React, {useState} from "react";

function HighScoreTable(props){

  const [scoresList, setScoresList] = useState(true) 

  function onButtonClick() {

    if (scoresList === true){
      props.allScores.map(data => data.scores.sort((data, data2) => data.s - data2.s))
      setScoresList (false) 
    } 

    else {
      props.allScores.map(data => data.scores.sort((data, data2) => data2.s - data.s))
      setScoresList (true)
    }
  }

  /*

  attempt to rewrite if statement with ternary --- not correct

  scoresList === true ? (
    props.allScores.map(data => data.scores.sort((data, data2) => data.s - data2.s))
    setScoresList (false)
    ) : (
      props.allScores.map(data => data.scores.sort((data, data2) => data2.s - data.s))
      setScoresList (true)
    ) 
  )

  */

  return (
<div className="countries-data">
<h1 className="heading">High Scores per Country</h1>

<div className="scores-button"><button className="button" onClick={onButtonClick}>Sort Scores by Ascending / Descending</button></div>


  {props.allScores.sort((data, data2) => data.name.localeCompare(data2.name))
  .map((data) => {
    return (
    <table className="table">
    <thead className="thead">
    <tr>
    <th className="country" colSpan="2">{"HIGH SCORES: " + data.name.toUpperCase()}</th>
    </tr>
    </thead>
      
    {data.scores
    // .sort((data, data2) => data2.s - data.s) - for ascending / descending button to work, this line need to be removed.

    .map((data) => {
    return (
    <tr>
    <td className="person-name">{data.n.toUpperCase()}</td>
    <td className="person-score"> {data.s}</td>
    </tr>
    );
    })}

    </table>

    );
    })}

    </div>
  )}
  export default HighScoreTable;