import * as React from "react";
import styled from 'styled-components';
const { useRef, useContext } = React;
import { useClickOutside } from "./useClickOutside";
import { GlobalContext } from "./GlobalState";

// const initialState = {
//   rValue: true,

// };

export const ReducerButton = () => {
  const ref = useRef<HTMLDivElement>(null!);

  const { rValue, turnOn, turnOff } = useContext(GlobalContext);
  useClickOutside(ref, () => {
    console.log("clicked outside");
  });
  return (
    <Wrapper ref={ref}>
      {rValue && <h1>Visible</h1>}
      <button onClick={turnOn}>Action One</button>
      <button onClick={turnOff}>Action Two</button>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  background: red;
`