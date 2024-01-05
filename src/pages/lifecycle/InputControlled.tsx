import { Component } from "react";

interface Iprops{
    value:string;
    onChange:React.ChangeEventHandler<HTMLInputElement>
}

class InputControlled extends Component<Iprops> {
  constructor(props: Iprops) {
    console.log("constructor");
    super(props);
  }
  static getDerivedStateFromProps(props: Iprops, state: any) {
    console.log("getDerivedStateFromProps");
    console.log(props, state);
  }
  render() {
    console.log("render");
    return (
      <input value={this.props.value} onChange={this.props.onChange}></input>
    );
  }
  componentDidMount(): void {
    console.log("componentDidMount");
  }
}

export default InputControlled;