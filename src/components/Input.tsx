import React, { useState, useRef } from "react";

export const Input = () => {
  const [name, setName] = useState<string>("");
  // const [name, setName] = useState<string | null>(null);
  //!null is read only
  const ref = useRef<HTMLInputElement>(null!);

  //console.log(ref?.current?.value);
  return (
    <div>
      <input ref={ref} value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
};
