import { useContext } from "react";
import { HeaderContext } from "../../Header";

export function HeaderGrandChild() {
  const { setCount } = useContext(HeaderContext);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev - 1)}>decrease</button>
    </div>
  );
}
