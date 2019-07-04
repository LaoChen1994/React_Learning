import React, { Component } from 'react';
import '../common/css/Comment/commentInput.scss';
class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      content: ''
    };
  }

  usernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  contentChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  submitComment() {
    if(this.props.onSubmit){
      const {username, content} = this.state;
      this.props.onSubmit({username, content});
    }
    this.setState({content: ''});
  }

  render() {
    return (
      <div className="form">
        <div className="form-item">
          <div className="form-item-title">用户名:</div>
          <div className="form-item-input">
            <input
              type="text"
              value={this.state.username}
              onChange={this.usernameChange.bind(this)}
            />
          </div>
        </div>
        <div className="form-item">
          <div className="form-item-title">评论内容:</div>
          <div className="form-item-input">
            <textarea
              cols="30"
              rows="10"
              value={this.state.content}
              onChange={this.contentChange.bind(this)}
            />
          </div>
        </div>
        <div className="form-btn">
          <button onClick={this.submitComment.bind(this)}>提交评论</button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
