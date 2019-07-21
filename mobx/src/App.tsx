import React, { Component, Fragment } from "react";
import "./App.scss";
import { observer } from "mobx-react";
import Store, { Worker } from "./Store";
import UnControlComponent from "./Uncontrol";
import FileUploader from "./FileUpload";
const appStore = new Store();

interface IRowProps {
  data: Worker;
  func?: any;
}

interface ITableProps {
  store: any;
}

interface IControlProps {
  Store: any;
}
interface IControlState {
  name: string;
  salary: number;
}

interface IAppProps {}

class Row extends Component<IRowProps> {
  constructor(props: IRowProps) {
    super(props);
    this.paySalay = this.paySalay.bind(this);
  }

  public paySalay(id: number) {
    this.props.func(id);
  }

  render() {
    // const { data } = this.props;
    return (
      <Fragment>
        <tr>
          <td>{this.props.data.name}</td>
          <td>{this.props.data.salary}</td>
          <td>
            {!this.props.data.isPaied ? (
              <button onClick={this.paySalay.bind(this, 1)}>发放工资</button>
            ) : (
              <button disabled>已发放</button>
            )}
          </td>
        </tr>
      </Fragment>
    );
  }
}

@observer
class Table extends React.Component<ITableProps> {
  public render() {
    const { store } = this.props;
    const row = store.exployeesList.map((elem: Worker, index: number) => (
      <Row data={elem} key={index} func={store.execPay} />
    ));
    return (
      <div className="table">
        <thead>
          <tr>
            <td>Name: </td>
            <td>Salary: </td>
            <td>Operation:</td>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </div>
    );
  }
}

@observer
class Control extends React.Component<IControlProps, IControlState> {
  public myRef: React.RefObject<HTMLInputElement>;
  public salaryRef: React.RefObject<HTMLInputElement>;

  constructor(props: Readonly<IControlProps>) {
    super(props);
    this.state = {
      name: "",
      salary: 0
    };
    this.myRef = React.createRef();
    this.salaryRef = React.createRef();
    // this.status = 1;
  }

  onChangeName(e: any) {
    this.setState({ name: e.target.value });
  }

  onChangeSalary(e: any) {
    this.setState({ salary: e.target.value });
  }

  noticeClick(e: any) {}

  submit() {
    const { Store } = this.props;
    const id = Store.exployeesList[Store.exployeesList.length - 1].id + 1;
    // console.log(Store.exployeesList[Store.exployeesList.length - 1].id);
    Store.addWorker({
      id,
      name: this.state.name,
      salary: this.state.salary,
      isPaied: false
    });
    console.log(this.myRef.current);
    console.log();
  }

  public render() {
    return (
      <Fragment>
        <div>
          <span>姓名:</span>
          <input
            type="text"
            name="username"
            value={this.state.name}
            onChange={this.onChangeName.bind(this)}
            ref={this.myRef}
          />
        </div>
        <div>
          <span>薪水:</span>
          <input
            type="text"
            name="money"
            value={this.state.salary}
            onChange={this.onChangeSalary.bind(this)}
            ref={this.salaryRef}
          />
          <button onClick={this.submit.bind(this)}>增加</button>
        </div>
      </Fragment>
    );
  }
}

class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <Table store={appStore} />
        <div>Unpaid Worker: {appStore.unpaiedCount}</div>
        <Control Store={appStore} />
        <UnControlComponent />
        <FileUploader />
      </div>
    );
  }
}

export default App;
