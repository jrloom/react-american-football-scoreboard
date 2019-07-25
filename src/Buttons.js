import React from "react";

const Buttons = props => {
  return (
    <button className="homeButtons__touchdown">
      {props.team} {props.type}
    </button>
  );
};

export default Buttons;
