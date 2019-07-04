import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import '../common/css/Comment/commentApp.scss';

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      content: []
    };
  }

  handleSubmit(data) {
    let content = this.state.content;
    content.push(data);
    this.setState({
      content: [].concat(content)
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="modules">
          <CommentInput onSubmit={this.handleSubmit.bind(this)} />
        </div>
        <div className="modules">
          <CommentList comments={this.state.content} />
        </div>
      </div>
    );
  }
}

export default CommentApp;
