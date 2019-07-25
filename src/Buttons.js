import React from "react";

const Buttons = props => {
  return (
    <div className="homeButtons">
      <button onClick={() => props.setScore(props.score + 7)} className="homeButtons__touchdown">
        {props.team} Touchdown
      </button>
      <button onClick={() => props.setScore(props.score + 3)} className="homeButtons__touchdown">
        {props.team} Field Goal
      </button>
    </div>
  );
};

export default Buttons;
