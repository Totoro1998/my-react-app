import { Component } from "react";
import InputUnControlled from "./InputUnControlled";

interface IState {
  message: string;
  timerId?: any;
}
export default class Update extends Component<{}, IState> {
  state: IState = {
    message: "",
  };
  componentDidMount(): void {
    const timerId = setTimeout(() => {
      this.setState({
        message: "new message",
      });
    }, 4000);
    this.setState({
      timerId,
    });
  }
  componentWillUnmount(): void {
    const { timerId } = this.state;
    if (timerId) {
      clearTimeout(timerId);
    }
  }
  render() {
    return (
      <div>
        <InputUnControlled />
      </div>
    );
  }
}
