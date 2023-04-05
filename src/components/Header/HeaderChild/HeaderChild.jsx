import { useContext } from "react";
import { HeaderContext } from "../Header";

import { HeaderGrandChild } from "./HeaderGrandChild/HeaderGrandChild";

export function HeaderChild() {
  const { setCount } = useContext(HeaderContext);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>increase</button>
      <HeaderGrandChild />
    </div>
  );
}
