import { createContext, useState } from "react";

import { HeaderChild } from "./HeaderChild";

export const HeaderContext = createContext({
  count: 0,
  setCount: undefined,
});

export function Header() {
  const [count, setCount] = useState(0);

  return (
    <HeaderContext.Provider value={{ count, setCount }}>
      <h1>Header</h1>
      <HeaderChild />

      <div>count: {count}</div>
      <br />
    </HeaderContext.Provider>
  );
}
