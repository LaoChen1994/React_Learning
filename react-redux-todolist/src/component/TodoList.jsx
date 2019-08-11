import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button } from "antd";
import { todoAction } from "../Action";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.delItem.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  delItem(data) {
    const { removeTodoItem } = this.props;
    return () => {
      removeTodoItem(data);
    };
  }

  changeStatus(data) {
    const { changeStatus } = this.props;
    return () => {
      changeStatus(data);
    };
  }

  render() {
    const { store } = this.props;
    const { todoItems } = store;
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "待办事项",
        dataIndex: "todoItem",
        key: "todoItem"
      },
      {
        title: "操作方法",
        dataIndex: "isCompleted",
        key: "isCompleted",
        render: (isCompleted, recoard, index) => {
          return (
            <>
              {
                <Button
                  type={isCompleted ? "primary" : "danger"}
                  onClick={this.changeStatus(recoard)}
                >
                  {isCompleted ? "完成" : "取消"}
                </Button>
              }
              <Button
                type="danger"
                onClick={this.delItem(recoard)}
                style={{ marginLeft: "20px" }}
              >
                删除
              </Button>
            </>
          );
        }
      }
    ];
    return (
      <>
        <Table
          columns={columns}
          dataSource={todoItems}
          className="table"
          style={{ marginTop: "20px" }}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  store: state
});

export default connect(
  mapStateToProps,
  todoAction
)(TodoList);
