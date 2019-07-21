import React, { Component } from 'react'
import '../css/CommentInput.scss'

class CommentList extends Component {
  render() {
    let commentList = this.props.commentList

    commentList = commentList.map((item, index) => (
      <div className="Comment" key={`comment-${indexs}`}>
        <span className="username">{item.username}</span>:
        <span className="comment">{item.comment}</span>
      </div>
    ))
    console.log(commentList)
    return <div className="Comment-list">{commentList}</div>
  }
}

export default CommentList
