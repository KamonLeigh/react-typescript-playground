import * as React from "react";

// type Props = {
//   // onClick(): string; method  returns string
//   // onClick(): void; method returns nothing
//   // onClick(text: string): void; void methods with params
//   // onClick: (text: string) => void
//   onClick: () => void;
//   onClick: (e: React.MouseEvent) => void; basic mouse events
// onChange?:(e: React.FormEvent<HTMLInputElement>) => void; // Basic input event

// };

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // children: JSX.Element
  //type3: Array<string> short hand for string[]
};

export const Button: React.FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
