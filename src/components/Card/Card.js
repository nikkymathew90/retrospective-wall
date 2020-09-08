import React from "react";
import classes from "../Card/Card.module.css";

const card = props => {
  return (
    <div className={classes.Card}>
      <p>{props.cardText.content}</p>
    </div>
  );
};

export default card;
