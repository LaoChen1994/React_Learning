import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return <h1>Header</h1>;
  }
}

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
      <div>
        <div>content:{this.state.content}</div>
        <div>count: {this.state.count}</div>
        <button onClick={this.addCount}>增加数量</button>
      </div>
    );
  }
}

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
      <div>
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
      <div>
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
        <tr>
          <td>{element.name}</td>
          <td>{element.age}</td>
          <td>{element.habbits}</td>
        </tr>
      );
    });
    return (
      <div className="table">
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

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Father />
      <ListRender />
    </div>
  );
}

export default App;
