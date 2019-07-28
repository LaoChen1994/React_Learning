import React, { Component } from "react";
import { WidthDataBind } from "./WithDataBind";

@WidthDataBind
class BindInputText extends Component {
  render() {
    return (
      <>
        <input {...this.props} />
      </>
    );
  }
}

// const BindTextInput = WidthDataBind(BindInputText);

export { BindInputText };
