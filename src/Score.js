import React from "react";

const Score = props => {
  return (
    <div className="home">
      <h2 className="home__name">{props.team}</h2>
      <div className="home__score">{props.score}</div>
    </div>
  );
};

export default Score;
