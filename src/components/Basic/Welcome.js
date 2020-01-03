import React, { Component } from "react";

class Welcome extends Component {
  render() {
      const {name, heroName} = this.props
    return (
      <h3>
        Welcome {name}, your superhero is {heroName}
      </h3>
    );
  }
}

export default Welcome;
