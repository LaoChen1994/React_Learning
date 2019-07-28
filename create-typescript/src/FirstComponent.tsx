import * as React from "react";

export interface IFirstProps {
  color: string;
  size?: string;
  // clickBtn: React.MouseEventHandler<HTMLInputElement>;
}

interface Istate {
  count: number;
}

interface IAppProps {}

const Second = (Wrapper: React.ComponentType, data: any) => {
  return class SecondComponent extends React.Component<IAppProps> {
    render() {
      return <Wrapper>{data}</Wrapper>;
    }
  };
};

class First extends React.Component<IFirstProps, Istate> {
  public state = {
    count: 1
  };

  constructor(props: IFirstProps) {
    super(props);
    this.clickBtn = this.clickBtn.bind(this);
  }

  public clickBtn(event: React.MouseEvent<HTMLButtonElement>): void {
    console.log(event.target);
    this.setState(state => {
      const count = state.count + 1;
      return { count };
    });
  }

  public render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.clickBtn.bind(this)}>+1</button>
      </div>
    );
  }
}

export { First, Second };
