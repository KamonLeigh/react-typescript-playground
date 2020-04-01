import * as React from "react";
import { Head } from "./components/Head";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ReducerButton } from "./components/ReducerButton";
import { GlobalProvider } from "./components/GlobalState";
import BigC from "./components/BigC";

import "./styles.css";

export default function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Head title="hello" status="spin" />
        <BigC title="title" />
        <Button
          onClick={e => {
            e.preventDefault();
            console.log(e);
          }}
        >
          Hello World
        </Button>
        <Input />
        <ReducerButton />
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </GlobalProvider>
  );
}
