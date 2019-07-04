import React, { Component } from 'react';
import '../common/css/Comment/comment.scss';

class Comment extends Component {
  render() {
    const comment = this.props.comment;
    console.log(comment);
    return (
      <div className="comment">
        <span className="username">{comment.username}:</span>
        <span className="content">{comment.content}</span>
      </div>
    );
  }
}

export default Comment;
