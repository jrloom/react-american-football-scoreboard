import React from "react";

const Buttons = props => {
  return (
    <div className="homeButtons">
      <button className="homeButtons__touchdown" onClick={() => props.setScore(props.score + 7)}>
        {props.team} Touchdown
      </button>
      <button onClick={() => props.setScore(props.score + 3)} className="homeButtons__touchdown">
        {props.team} Field Goal
      </button>
    </div>
  );
};

export default Buttons;

// props.team && touchdown || field goal === home
// add score to home
// add score to away
