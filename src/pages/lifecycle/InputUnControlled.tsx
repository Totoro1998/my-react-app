import { Component } from "react";

interface Iprops {}
interface IState {
  value: string;
}

class InputUnControlled extends Component<Iprops, IState> {
  constructor(props: Iprops) {
    console.log("constructor");
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    console.log("handleChange", value);
    this.setState({
      value,
    });
  }
  static getDerivedStateFromProps(props: Iprops, state: any) {
    console.log("getDerivedStateFromProps");
    console.log(state);
    // 会导致state重置的问题
    // return {
    //   ...state,
    //   value: "",
    // };
    return null;
  }
  shouldComponentUpdate(
    nextProps: Readonly<Iprops>,
    nextState: Readonly<IState>,
    nextContext: any
  ): boolean {
    console.log("shouldComponentUpdate");
    return true;
    // return false;
  }
  render() {
    console.log("render");
    return (
      <input
        value={this.state.value}
        onChange={this.handleChange}
        className="border"
      ></input>
    );
  }
  componentDidMount(): void {
    console.log("componentDidMount");
  }
  getSnapshotBeforeUpdate(
    prevProps: Readonly<Iprops>,
    prevState: Readonly<IState>
  ) {
    console.log("getSnapshotBeforeUpdate");
    return {
      message: "getSnapshotBeforeUpdateMessage",
    };
  }
  componentDidUpdate(
    prevProps: Readonly<Iprops>,
    prevState: Readonly<IState>,
    snapshot?: any
  ): void {
    console.log("componentDidUpdate");
  }
}

export default InputUnControlled;
