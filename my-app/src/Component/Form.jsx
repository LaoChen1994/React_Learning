import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  static childContextTypes = {
    model: PropTypes.object,
    changeModel: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      model: {}
    };
    this.changeModel = this.changeModel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { onSubmit } = this.props;
    console.log(this.state.model);
    // console.log(this)
    console.log(onSubmit);
    if (typeof onSubmit === "function") {
      onSubmit(this.state.model);
    }
  }

  changeModel(name, value) {
    this.setState({
      model: {
        ...this.state.model,
        [name]: value
      }
    });
  }

  getChildContext() {
    const _this = this;
    return {
      model: _this.state.model,
      changeModel: _this.changeModel
    };
  }

  render() {
    return (
      <div>
        {this.props.children}
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}
export default Form;
