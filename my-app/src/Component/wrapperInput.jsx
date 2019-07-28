import React from "react";
import wapWithLoader from "./wrapWithLoadData";

class InputWithUserName extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <input value={this.props.data} />;
  }
}

InputWithUserName = wapWithLoader(InputWithUserName, "username");
export default InputWithUserName;
