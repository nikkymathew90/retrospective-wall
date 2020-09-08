import React, { useState } from "react";
import classes from "../Section/Section.module.css";
import Card from "../../components/Card/Card";

const Section = props => {
  const [cards, setCards] = useState([]);
  const [textAreaFlag, settextAreaFlag] = useState(false);

  const addCardHandler = () => {
    settextAreaFlag(true);
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      const newCards = [...cards, { content: event.target.value }];
      setCards(newCards);
      settextAreaFlag(false);
    }
  };

  const closeInputHandler = event => {
    settextAreaFlag(false);
  };

  return (
    <div className={classes.Section}>
      <div>
        <b>{props.sectiondata.label}</b>
        <i onClick={addCardHandler}></i>
      </div>

      <div>
        <div className={classes.CardContainer}>
          {cards.map(card => {
            return <Card cardText={card} />;
          })}
        </div>
        {textAreaFlag && (
          <div className={classes.Backdrop} onClick={closeInputHandler}>
            <i className={classes.Close}></i>
            <textarea
              placeholder="Click to enter"
              onKeyPress={handleKeyPress}
            ></textarea>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
