import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import Memocomp from "./Memocomp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Arjun"
    };
  }

  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          name: "Arjun"
        }),
      2000
    );
  }

  render() {
      console.log('*********************** Parent Comp Render *****************************')
    return <div>
        Parent Component

        <Memocomp name={this.state.name} />
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
        </div>;

  }
}

export default ParentComp;
