import React, { useReducer, useState } from 'react';
import { Button, Input } from 'zent';
interface IProps {}

const initialState = {
  commentList: [{ name: 'React', isDone: false }, { name: 'Vue', isDone: true }]
};

const commentListReducer = (state, action) => {
  switch (action.type) {
    case 'addComment':
      return {
        ...state,
        commentList: [...state.commentList, action.payload]
      };
    default:
      break;
  }
  return state;
};

export function CommentList(): IProps {
  const [commentState, commentDispatch] = useReducer(
    commentListReducer,
    initialState
  );

  const [inputContent, setContent] = useState('');

  const addComment = value => () =>
    commentDispatch({ type: 'addComment', payload: {name: value, isDone: false} });

  const inputChange = event => setContent(event.target.value);

  const renderController = () => (
    <div style={{ display: 'flex' }}>
      <Input
        value={inputContent}
        onChange={inputChange}
        placeholder="请输入值"
        width="100px"
      ></Input>
      <Button onClick={addComment(inputContent)}>新增信息</Button>
    </div>
  );

  const rednderCommentList = () => (
    <div>
      {commentState.commentList.map(elem => (
        <div>
          {elem.name} / {elem.isDone ? '已完成' : '未完成'}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {renderController()}
      {rednderCommentList()}
    </div>
  );
}
