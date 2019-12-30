import React, { Component } from "react";

class UserGreetings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

  render() {

    return this.state.isLoggedIn && <div>Welcome Arjun</div>
    
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Arjun</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }

    // return <div>{message}</div>;

    // return(
    //     this.state.isLoggedIn ? <div>Welcome Khunti</div> : <div>Welcome Guest</div>
    // )

    // return (
    //     <div>

    //     </div>
    // )
  }
}

export default UserGreetings;
