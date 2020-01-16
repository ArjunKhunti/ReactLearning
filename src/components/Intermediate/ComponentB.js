import React, { Component } from "react";
import ComponentC from "./ComponentC";
import UserContext from "../../UserContext";

export class ComponentB extends Component {
  render() {
    return (
      <div>
          from Component B Hello {this.context}
        <ComponentC />
      </div>
    );
  }
}
// Only applicable with class
ComponentB.contextType = UserContext;
export default ComponentB;
