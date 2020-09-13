import React, { Component } from "react";
import Section from "../Section/Section";
import classes from "../Board/Board.module.css";

class Board extends Component {
  state = {
    Sections: [
      { name: "WentWell", label: "What went well", id: "1" },
      { name: "Improvements", label: "What can be improved", id: "2" },
      { name: "StartDoing", label: "Start doing", id: "3" },
      { name: "ActionItems", label: "Action Items", id: "4" }
    ]
  };

  render() {
    return (
      <div>
        <p>
          <b>Retrospective Board</b>
        </p>
        <div className={classes.Board}>
          {this.state.Sections.map(section => {
            return <Section key={section.id} sectiondata={section} />;
          })}
        </div>
      </div>
    );
  }
}

export default Board;
