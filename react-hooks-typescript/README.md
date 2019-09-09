### React Hooks

本文参考主要博文:

[阮一峰老师的 React-hooks 教程](http://www.ruanyifeng.com/blog/2019/09/react-hooks.html)

[How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data)

[useEffect 完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)

[React-hooks 的官方文档](https://zh-hans.reactjs.org/docs/hooks-effect.html)

**React hooks 的主要功能是让函数式组件能够模拟出自身的状态 state 和生命钩子函数**

常用的 React Hooks 函数包括

- useState
- useEffect
- useContext
- useReducer

### 1. useState

useState 主要是创建一个 state 变量并赋予初始值

通过数组解构的方式来获取 state 变量和一个改变该变量的函数

```javascript
import React, { useState, useEffect } from 'react'
import { Button, Notify } from 'zent'

export function Counter(props) {
  // 这里的counter为state中的一个值且其初始值为0
  const [counter, setCounter] = useState(0)

  const handleSetCounter = number => () => {
    // 通过调用setCounter可以实现对于counter的赋值
    setCounter(number)
  }

  return (
    <div>
      <div>{counter}</div>
      <Button onClick={handleSetCounter(counter + 1)} type="primary">
        +1
      </Button>
      <Button type="primary" onClick={handleSetCounter(counter - 1)}>
        -1
      </Button>
      <Button type="danger" onClick={handleSetCounter(0)}>
        reset
      </Button>
    </div>
  )
}
```

### 2. useEffect

- useEfffect 的执行一般在页面渲染之后 -> React 保证了每次 effect 的执行都在页面的 DOM 更新完毕之后！
- useEffect 一般放在函数内部，这样可以直接完成对 state 和更改 state 函数的调用方法
- useEffect 的第一个参数为一个函数，用来作为每次渲染完成后执行的回调函数 effect，通过 return 一个函数来作为清除操作时调用的函数(组件卸载的时候调用)

#### 可能存在的问题

这里可能会有一个问题　如果当我们在 useEffect 中调用了改变 state 那可能又会渲染这个函数, 再调用 effect 函数可能就会出现循环调用的问题

#### 解决办法

**通过 useEffect 函数中的第二个参数来解决**

我们可以通过 useEffect 中的第二个参数来设置，该 effect 函数只在特定的某个参数进行变动的时候才会执行

<font color=red>这里要注意的是，如果第二个参数为[]说明该函数在任何参数变动的时候都不执行，则该函数只在一开始初始化 render 的时候执行一次，所以代表的是 componentDidMount 这个钩子函数</font>



### 3. useContext 

+ useContext主要用于为函数式组件接入伏组件的context
+ useContext相当于一个Consumer

~~~javascript
// 父组件 App.tsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Index } from './component/Index';

// 给定一个初始值
// 1. 首先创建一个createContext
export const Context = React.createContext({ name: '' });

export const App: React.FC = () => {
  return (
    <div className="App">
    	// 2. 通过Context的Provider来共享Context的值
      <Context.Provider value={{ name: 'Context Name' }}>
    		<Index />
      </Context.Provider>
    </div>
  );
};

~~~

#### 子组件获取其Context的方式

~~~javascript
// Index.tsx
import React, { useContext } from 'react'
// 父组件
import { Context } from '../../App';

export function Index(): Props {

  const { name } = useContext(Context);

  return (
    <div>
      Index { name }
    </div>
  )
}
~~~



**Notes: 使用方法**

	1. 在父组件中调用React.createContext创建一个Context并赋予初始值
 	2. 通过Context.Provider把Context传给子树
 	3. 在需要调用的子组件中导入Context
 	4. 通过useContext获得导出的值（通过解构赋值得到）



### 4.useReducer

+ useReducer类似于Redux(调用的作用机制)，但是又何redux不一样(只能维护组件内的状态)
+ `useReducer` 会比 `useState` 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。并且，使用 `useReducer` 还能给那些会触发深更新的组件做性能优化，因为[你可以向子组件传递 `dispatch` 而不是回调函数](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down) 。(官网原文)
+ useReducer一般用于复杂的业务逻辑下用来更新state, 然后通过reducer函数中做集中的状态控制

~~~javascript
import React, { useReducer, useState } from 'react';
import { Button, Input } from 'zent';
interface IProps {}

// 1. 给定reducer的初始值
const initialState = {
  commentList: [{ name: 'React', isDone: false }, { name: 'Vue', isDone: true }]
};

// 2. 创建一个reducer
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
  // 3. 通过useReducer创建一个reducer
  const [commentState, commentDispatch] = useReducer(
    commentListReducer,
    initialState
  );

  const [inputContent, setContent] = useState('');

  // 4. 通过dispatch方法来发起一个action
  // action传到reducer完成处理后返回更改state
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

~~~



**Notes: 使用方法**

1. 创建初始值和reducer
2. 通过useReducer创建状态管理的reducer，得到一个**state**和**dispatch**方法
3. 在需要的地方通过**dispatch**方法完成对于**state**的改变，其中一般通过action.type来指定操作方法，通过action.payload来指定参数(也可以自己自定义问题不大)
4. state更改后回重新渲染得到新的页面