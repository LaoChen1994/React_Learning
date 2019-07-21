import React, { Component } from 'react'
import '../css/CommentInput.scss'

// import { Container } from './styles';

export default class CommentInput extends Component {
  state = {
    username: '',
    comment: ''
  }

  changeUsername(e) {
    this.setState({ username: e.target.value })
  }

  changeComment(e) {
    this.setState({ comment: e.target.value })
  }

  submitComment() {
    this.props.addCommentList({
      username: this.state.username,
      comment: this.state.comment
    })
  }

  render() {
    return (
      <div>
        <div className="text">
          <span>用户名：</span>
          <input
            type="text"
            onChange={this.changeUsername.bind(this)}
            value={this.state.username}
          />
        </div>
        <div className="text">
          <span>评论内容：</span>
          <textarea
            name="textArea"
            cols="30"
            rows="10"
            value={this.state.comment}
            onChange={this.changeComment.bind(this)}
          />
        </div>
        <button onClick={this.submitComment.bind(this)}>Submit</button>
      </div>
    )
  }
}
