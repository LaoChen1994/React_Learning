import * as React from "react";
import "../style/darwer.scss";
export interface IAppProps {
  showDrawer: boolean;
  changeDrawer: () => void;
}

export default class App extends React.Component<IAppProps> {
  public render() {
    const { showDrawer, changeDrawer } = this.props;
    return (
      <div className={`wrapper ${showDrawer ? "show" : "hide"}`}>
        <div className="close" onClick={changeDrawer}>
          x
        </div>
        <div className={`darwer ${showDrawer ? "toggle-bottom" : null}`}>
          123
        </div>
      </div>
    );
  }
}
