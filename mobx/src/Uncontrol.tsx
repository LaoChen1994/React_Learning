import * as React from "react";

export interface IUnControlComponentProps {}
export interface IUnControlComponentState {
  content: string;
}

export default class UnControlComponent extends React.Component<
  IUnControlComponentProps,
  IUnControlComponentState
> {
  public input: HTMLInputElement | null;
  constructor(props: any) {
    super(props);
    // this.input;
    this.input = null;
    this.state = {
      content: ""
    };
  }

  handleClick() {
    console.log(this.input ? this.input.value : undefined);
    if (this.input) {
      this.setState({ content: this.input.value });
    }
  }

  public render() {
    return (
      <div>
        <input
          type="text"
          ref={input => {
            this.input = input;
          }}
          defaultValue="uncontrol"
        />
        <button onClick={this.handleClick.bind(this)}>click</button>
        {`所输入的内容是: ${this.state.content}`}
      </div>
    );
  }
}
