import React, { Component } from "react";

export default (WrappedComponent, name) => {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = { data: null };
    }

    componentWillMount() {
      let data = localStorage.getItem(name);
      this.setState({ data });
    }

    componentDidMount() {
      // this.input.focus();
      console.log(this.props);
    }

    render() {
      console.log(this.input);
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  }
  return NewComponent;
};
