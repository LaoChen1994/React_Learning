import React, { Component } from 'react';

export default class form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.contentSubmit = this.contentSubmit.bind(this);
  }

  inputChangeHandler(event) {
    const val = event.target.value;
    // console.log(val);
    this.setState({ content: val });
  }

  contentSubmit() {
    this.setState({ content: '' });
    console.log(this.state.content);
    this.props.addTodoList(this.state.content);
  }

  render() {
    return (
      <div className="form">
        <div className="form-input">
          <input
            type="text"
            value={this.state.content}
            onChange={this.inputChangeHandler}
          />
        </div>
        <div className="form-btn">
          <button onClick={this.contentSubmit}>Add:#{this.props.number}</button>
        </div>
      </div>
    );
  }
}
