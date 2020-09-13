import React from "react";
import classes from "../Card/Card.module.css";

const card = props => {
  return (
    <div className={`${classes.Card} ${classes[props.sectionName]}`}>
      <span>{props.cardText.content}</span>
    </div>
  );
};

export default card;
