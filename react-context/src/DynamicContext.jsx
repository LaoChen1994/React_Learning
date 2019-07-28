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

const ThemeContext = React.createContext();

class Box extends Component {
  loadStyle(theme) {
    console.log(theme);
    return (
      <div>
        <div style={theme.color}>我会变色</div>
        <button onClick={theme.changeMethod}>我也可以帮你变色</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {(theme, changeMethod) => this.loadStyle(theme, changeMethod)}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

class ToolBar extends Component {
  render() {
    return <Box />;
  }
}

class DynamicContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorTheme: style.light
    };
  }

  changeTheme() {
    console.log(this.state.colorTheme);
    this.setState(state => ({
      colorTheme: state.colorTheme === style.light ? style.dark : style.light
    }));
  }

  render() {
    const _this = this;
    return (
      <div>
        <ThemeContext.Provider
          value={{
            color: _this.state.colorTheme,
            changeMethod: _this.changeTheme.bind(_this)
          }}
        >
          <ToolBar />
        </ThemeContext.Provider>
        <button onClick={this.changeTheme.bind(this)}>变色吧</button>
      </div>
    );
  }
}

export default DynamicContext;
