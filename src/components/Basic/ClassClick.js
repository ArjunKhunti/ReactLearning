import React, { Component } from "react";

export class ClassClick extends Component {
  clickHandler() {
    console.log("Clicked the button");
  }
  
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click Me</button>
      </div>
    );
  }
}

export default ClassClick;
