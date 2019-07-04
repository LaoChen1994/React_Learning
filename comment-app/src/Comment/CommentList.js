import React, { Component } from 'react';
import Comment from './Comment';
import '../common/css/Comment/commentList.scss';

class CommentList extends Component {
  render() {
    // const comments = [
    //   { username: 'Jerry', content: 'Hello' },
    //   { username: 'Tomy', content: 'World' },
    //   { username: 'Lucy', content: 'Good' }
    // ];
    const comments = this.props.comments;
    const commentList = comments.reduce((totalElements, prevElem, index) => {
      console.log(prevElem);
      totalElements.push(<Comment comment={prevElem} key={`comment-${index}`}/>);
      return totalElements;
    }, []);
    return (
      <div className="commentList">
        <div className="commentText">评论区:</div>
        {commentList}
      </div>
    );
  }
}

export default CommentList;
