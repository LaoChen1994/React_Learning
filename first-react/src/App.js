import React, { Component } from 'react';
import './App.css';
// 第一个react组件
class Header extends Component {
  render() {
    return <h1>Header</h1>;
  }
}
// 参数绑定与事件绑定
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '123',
      count: 0
    };
    this.addCount = this.addCount.bind(this);
  }

  componentDidMount() {
    const _this = this;
    setTimeout(() => {
      _this.setState({ content: 'change' });
      // _this.state.content = 1;
    }, 1000);
  }
  addCount() {
    let count = this.state.count;
    this.setState({
      count: ++count
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div>content:{this.state.content}</div>
        <div>count: {this.state.count}</div>
        <button onClick={this.addCount}>增加数量</button>
      </div>
    );
  }
}
// 父子组件传参
class Son extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'son',
      msg: 'Son Message'
    };
    this.sendMsg = this.sendMsg.bind(this);
  }

  clickBtn() {
    this.props.callBack(this.state.name);
  }

  sendMsg() {
    this.props.msgFromChild(this.state.msg);
  }

  render() {
    return (
      <div className="wrapper">
        <div>name:{this.props.name}</div>
        <button onClick={this.clickBtn.bind(this)}>改变名称</button>
        <br />
        <button onClick={this.sendMsg}>发送信息</button>
      </div>
    );
  }
}

class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'father',
      msg: ''
    };
  }

  callBack(name) {
    this.setState({ name: name });
  }

  msgFromChild(msg) {
    this.setState({
      msg: msg
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div>Msg: {this.state.msg}</div>
        <Son
          name={this.state.name}
          callBack={this.callBack.bind(this)}
          msgFromChild={this.msgFromChild.bind(this)}
        />
      </div>
    );
  }
}
// 列表渲染
class ListRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [
        { name: 'tom', age: 18, habbits: 'baseball' },
        { name: 'jerry', age: 20, habbits: 'tennis' },
        { name: 'Mike', age: 19, habbits: 'football' },
        { name: 'Jenny', age: 30, habbits: 'ice hockey' }
      ],
      tableHead: ['姓名', '年龄', '喜好']
    };
  }

  render() {
    let header = [];
    let content = [];
    this.state.tableHead.forEach((element, index) => {
      header.push(<td key={`title-${index}`}>{element}</td>);
    });
    this.state.userInfo.forEach((element, index) => {
      content.push(
        <tr key={`con-${index}`}>
          <td>{element.name}</td>
          <td>{element.age}</td>
          <td>{element.habbits}</td>
        </tr>
      );
    });
    return (
      <div className="table wrapper">
        <table>
          <caption>用户信息</caption>
          <thead>
            <tr>{header}</tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    );
  }
}

// 表单数据的双向绑定

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '', sex: '1', fruit: '' };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.sexChange = this.sexChange.bind(this);
    this.fruitChange = this.fruitChange.bind(this);
  }

  inputChangeHandler(event) {
    this.setState({ content: event.target.value });
  }

  sexChange(event) {
    this.setState({ sex: event.target.value });
  }

  fruitChange(event) {
    this.setState({ fruit: event.target.value });
  }

  render() {
    const fruitSelector = ['banana', 'apple', 'orange'].map((elem, index) => (
      <option value={elem} key={index}>
        {elem}
      </option>
    ));
    return (
      <div className="wrapper">
        <div className="input">
          <input
            type="text"
            value={this.state.content}
            onChange={this.inputChangeHandler}
          />
          <div>INPUT: {this.state.content}</div>
        </div>

        <div className="sex">
          <input
            type="radio"
            value="1"
            checked={this.state.sex === '1'}
            onChange={this.sexChange}
          />
          男
          <input
            type="radio"
            value="2"
            checked={this.state.sex === '2'}
            onChange={this.sexChange}
          />
          女<div>SEX:{this.state.sex === '1' ? '男' : '女'}</div>
        </div>

        <div className="select">
          <select
            name="city"
            value={this.state.fruit}
            onChange={this.fruitChange}
          >
            {fruitSelector}
          </select>
          <div>SELECTED:{this.state.fruit}</div>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Father />
      <ListRender />
      <Form />
    </div>
  );
}

export default App;
