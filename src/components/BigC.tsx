import * as React from "react";
const { Component } = React;

type Props = {
  title: string;
};

type State = {
  status: string;
};

interface State2 {
  status: string;
}

export default class BigC extends Component<Props, State> {
  render() {
    return (
      <div>
        <h1>I am a class component</h1>
      </div>
    );
  }
}
