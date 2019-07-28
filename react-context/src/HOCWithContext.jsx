import React, { Component } from "react";

const style = {
  light: {
    background: "yellowgreen",
    color: "#ffdfd1"
  },
  dark: {
    background: "black",
    color: "white"
  }
};

const ThemeContextHOC = React.createContext("light");

// 在函数中引入组件
function withTheme(Component) {
  // 然后返回另一个组件
  return function ThemedComponent(props) {
    // 最后使用context theme渲染这个被封装组件
    // 注意我们照常引用了被添加的属性
    return (
      <ThemeContextHOC.Consumer>
        {theme => <Component {...props} theme={style[theme]} />}
      </ThemeContextHOC.Consumer>
    );
  };
}

function Button({ theme, ...rest }) {
  return <button style={theme} {...rest} />;
}

// class Button extends Component {
//   componentWillMount() {
//     console.log(this.props.theme);
//   }

//   render() {
//     return (
//       <div>
//         <button style={this.props.theme}>{this.props.children}</button>
//       </div>
//     );
//   }
// }

class HOCWithContext extends Component {
  render() {
    const ThemeBtn = withTheme(Button)();
    console.log(ThemeBtn);
    return (
      <div>
        <ThemeContextHOC.Provider value="light">
          <ThemeBtn />
        </ThemeContextHOC.Provider>
      </div>
    );
  }
}

export default HOCWithContext;
