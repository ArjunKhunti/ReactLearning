import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: 'bravo'
    };
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleCommentsChange = event => {
    this.setState({
      comments: event.target.value
    });
  };
  
  
  handleTopicChange = event => {
    this.setState({
      topic: event.target.value
    });
  };

  
  handleSubmit = event => {
    alert(`${this.state.username} and ${this.state.comments} and ${this.state.topic}`)
    event.preventDefault()
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value="alpha">Alpha</option>
                <option value="bravo">Bravo</option>
                <option value="charlie">Charlie</option>
            </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
