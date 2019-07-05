import React, { Component } from 'react';

export default class todoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const content = this.props.content.map((elem, index) => <li key={`list-${index}`}>{elem}</li>);

    return (
      <div>
        <ul>{content}</ul>
      </div>
    );
  }
}
