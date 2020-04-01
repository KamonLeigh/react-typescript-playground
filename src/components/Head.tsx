import React from "react";

// isActive
// title

// type Props = {
//   title: 'props' | 'pasta'
//   type: string[] an array of strings
//   type1?: boolean optional
//   type2: {} object
//   type3: {
//      name: string
//  }
//
//  func: () => void

type Props = {
  title: string;
  isActive: boolean;
};

export const Head = ({ title, isActive }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  );
};
