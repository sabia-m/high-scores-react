import React from "react";

const HighScoreTable = (props) => (

<div className="countries-data">
<h1 className="heading">High Scores per Country</h1>

  {props.allScores.map((data) => {
    return (
    <table className="table">
    <thead className="thead">
    <tr>
    <th className="country" colSpan="2">{"HIGH SCORES: " + data.name.toUpperCase()}</th>
    </tr>
    </thead>
      
    {data.scores.map((data) => {
    return (
    //<div className="name-score">
    <tr>
    <td className="person-name">{data.n.toUpperCase()}</td>
    <td className="person-score"> {data.s}</td>
    </tr>
    //</div>
    );
    })}

    </table>

    );
    })}

    </div>
  );
  export default HighScoreTable;

