import React from "react";

function HighScoreTable(props){
  return (
<div className="countries-data">
<h1 className="heading">High Scores per Country</h1>

  {props.allScores.sort((data, data2) => data.name.localeCompare(data2.name))
  .map((data) => {
    return (
    <table className="table">
    <thead className="thead">
    <tr>
    <th className="country" colSpan="2">{"HIGH SCORES: " + data.name.toUpperCase()}</th>
    </tr>
    </thead>
      
    {data.scores.sort((data, data2) => data2.s - data.s)
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