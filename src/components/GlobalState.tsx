import * as React from "react";
const { createContext, useReducer } = React;

export const initialValues = {
  rValue: true,
  turnOff: () => {},
  turnOn: () => {}
};

type State = {
  rValue: boolean;
};

// type Action = {
//   type: "one" | "two";
// };

type Action = { type: "one" } | { type: "two" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "one":
      return { rValue: true };
    case "two":
      return { rValue: false };
    default:
      return state;
  }
}

export const GlobalContext = createContext(initialValues);

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <GlobalContext.Provider
      value={{
        rValue: state.rValue,
        turnOff: () => dispatch({ type: "two" }),
        turnOn: () => dispatch({ type: "one" })
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
