import React, { Component } from "react";

const ComponentTreeParam = React.createContext();
const ComponentTreeParamV2 = React.createContext();

class Inner extends Component {
  list(elem) {
    console.log(elem);
    return elem.map((x, index) => (
      <div key={index}>
        姓名:{x.name} / 年龄: {x.age}
      </div>
    ));
  }

  render() {
    return (
      <div>
        <ComponentTreeParam.Consumer>
          {elem => this.list(elem)}
        </ComponentTreeParam.Consumer>
        <div>恭喜发财</div>
        <ComponentTreeParamV2.Consumer>
          {elem => this.list(elem)}
        </ComponentTreeParamV2.Consumer>
        <br />
        <ComponentTreeParam.Consumer>
          {theme1 => {
            return (
              <ComponentTreeParamV2>
                {theme2 => {
                  return [...this.list(theme1), ...this.list(theme2)];
                }}
              </ComponentTreeParamV2>
            );
          }}
        </ComponentTreeParam.Consumer>
      </div>
    );
  }
}

class ToolBar extends Component {
  render() {
    return <Inner />;
  }
}

class Context extends Component {
  render() {
    const collections = [
      { name: "Zhangsan", age: 18 },
      { name: "LiSi", age: 20 }
    ];
    const collections2 = [
      { name: "Zhangsan", age: 35 },
      { name: "LiSi", age: 38 }
    ];
    return (
      <ComponentTreeParam.Provider value={collections}>
        <div>
          <ComponentTreeParamV2.Provider value={collections2}>
            <ToolBar />
          </ComponentTreeParamV2.Provider>
        </div>
      </ComponentTreeParam.Provider>
    );
  }
}

export default Context;
