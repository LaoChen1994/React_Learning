# React 学习笔记

## 参考资料

本学习笔记主要参考: [React.js 小书](http://huziketang.mangojuice.top/books/react/lesson1)

具体代码详解和 Notes 可参见 [我的 CSDN 博客](https://blog.csdn.net/qq_24724109/column/info/40972)

---

## first-react

### 简介

### 内容如下：

- 编写一个简单的 React 组件
- state 与 setState
- 参数的动态绑定
- 事件监听绑定
- 父子组件间通信
- 组件间的参数传递(状态提升)
- 列表数据渲染
- 表单数据的双向绑定

## comment-app

### 简介

该 app 下使用基础的 React 语法完成了一个评论区的基本功能

### 内容包括

| id  | 组件名          | 功能                 |
| --- | --------------- | -------------------- |
| 1   | CommentApp.js   | 评论区整体挂载组件   |
| 2   | CommentInput.js | 评论区的用户输入部分 |
| 3   | CommentList.js  | 评论区用户评论列表   |
| 4   | Comment.js      | 单条的用户评论信息   |

## todo-list

### 简介

该 app 下使用基础的 React 语法完成了一个 todolist 的基本功能

### 内容包括

| id  | 组件名         | 功能                  |
| --- | -------------- | --------------------- |
| 1   | todoListApp.js | todoList 整体挂载组件 |
| 2   | form.js        | 用户输入代办事项部分  |
| 3   | todoList.js    | 待办事项显示          |

## my-app

### 简介

一个高阶组件的例子

### 内容如下：

- HOC 组件的编写
- Context 的例子

### 内容包括

| id  | 组件名           | 功能                                 |
| --- | ---------------- | ------------------------------------ |
| 1   | BindInput.jsx    | 双向绑定的 Input 组件                |
| 2   | Form.js          | Form 组件用来管理 Input 内的填写信息 |
| 3   | WithDataBind.jsx | 双向绑定的高阶组件                   |
| 4   | App.js           | 调用 Form 和 BindInput 组件          |

## react-context

### 简介

一个调用 react Context 的例子

### 内容如下

- Provider 和 Consumer
- 动态 Context 的用法
- 多级 Context 的调用

### 内容包括

| id  | 组件名             | 功能                            |
| --- | ------------------ | ------------------------------- |
| 1   | App.js             | 入口文件                        |
| 2   | Context.js         | Context 的基本用法 Provider     |
| 3   | DynamicContext.jsx | 动态 Context 的用法 和 Consumer |

## mobx-demo

一个通过 mobx 写的 todolist 的例子

###内容包括

| id  | 组件名   | 功能                              |
| --- | -------- | --------------------------------- |
| 1   | Store.js | 定义的 Store                      |
| 2   | App.js   | observer, provider, inject 的用法 |

## todo-typescript

一个用 mobx+typescript+react 的 todo-list 例子

###内容包括

| id  | 组件名                     | 功能                   |
| --- | -------------------------- | ---------------------- |
| 1   | ./Interface/Interface.ts   | 定义组件中需要的接口类 |
| 2   | ./component/Controller.tsx | 控制按钮组件           |
| 3   | ./component/Todo.tsx       | todoList 显示列表      |
| 4   | ./Store/Store.ts           | mobx 的 Store          |
| 5   | ./App.ts                   | 入口文件               |

## react-router

router 的简单例子(未完成)

###内容包括

| id  | 组件名 | 功能 |
| --- | ------ | ---- |
| 1   |        |      |
| 2   |        |      |

## react-redux

redux 的基础语法
如何在 react 中引入 redux，并实现数据的绑定监听

### 内容包括

| id  | 组件名    | 功能                                   |
| --- | --------- | -------------------------------------- |
| 1   | Store.js  | 通过 createStore 来创建一个 Store      |
| 2   | Action.js | 定义的 Action 方法，通过 action 方法来 |

## react-redux-demo

react-redux 的基础语法

### 内容包括

| id  | 组件名                  | 功能             |
| --- | ----------------------- | ---------------- |
| 1   | ./Store                 | 公共 Store       |
| 2   | ./Action                | 全局 Action 方法 |
| 3   | ./Reducer               | Reducer 方法     |
| 4   | ./component/Counter.jsx | 计数器组件       |

## react-redux-todolist

react-redux + antd 的 todolist 实践

| id  | 组件名                     | 功能             |
| --- | -------------------------- | ---------------- |
| 1   | ./Store                    | 公共 Store       |
| 2   | ./Action                   | 全局 Action 方法 |
| 3   | ./Reducer                  | Reducer 方法     |
| 4   | ./component/Controller.jsx | 控制器组件       |
| 5   | ./component/TodoList.jsx   | 显示的 Todo 列表 |
