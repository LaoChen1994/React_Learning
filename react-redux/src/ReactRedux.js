import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class ReactRedux extends Component {
  render() {
    return <div />;
  }
}

export default connect(mapStateToProps)(ReactRedux);
