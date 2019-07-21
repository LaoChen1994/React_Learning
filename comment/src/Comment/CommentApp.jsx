import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import '../css/CommentApp.scss'

// import { Container } from './styles';

class CommentApp extends Component {
  state = {
    commentList: []
  }

  addCommentList(comment) {
    this.setState(preState => {
      let commentList = preState.commentList
      commentList.push(comment)
      return { commentList: commentList }
    })
  }

  render() {
    return (
      <div className="comment-wrapper">
        <CommentInput addCommentList={this.addCommentList.bind(this)} />
        <CommentList commentList={this.state.commentList} />
      </div>
    )
  }
}

export default CommentApp
