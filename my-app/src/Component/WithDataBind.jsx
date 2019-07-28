import React, { Component } from "react";
import PropTypes from "prop-types";

function WidthDataBind(WrapperComponent) {
  return class WithDataBind extends Component {
    static contextTypes = {
      model: PropTypes.object,
      changeModel: PropTypes.func
    };

    state = {
      value: this.props.value | ""
    };

    onChange(event) {
      const { changeModel } = this.context;
      const { v_model } = this.props;
      const { onChange } = this.props;
      changeModel(v_model, event.target.value);
      this.setState({ value: event.target.value });
      if (typeof onChange === "function") {
        const newEvent = { ...event, name: v_model, value: event.target.value };
        console.log(newEvent);
        // onChange(newEvent);
      }
    }

    componentDidMount() {
      console.log(this.props.onSubmit);
    }

    render() {
      const props = this.props;
      //   console.log(this.context);
      const { model } = this.context;
      const { v_model } = this.props;
      const newProps = {
        ...props,
        onChange: this.onChange.bind(this),
        value: model[v_model]
      };
      return (
        <>
          <WrapperComponent {...newProps} />
        </>
      );
    }
  };
}

export { WidthDataBind };
