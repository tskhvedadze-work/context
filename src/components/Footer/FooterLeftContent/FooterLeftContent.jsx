import { useContext } from "react";

import { GlobalContext } from "@/context/GlobalContext";

export function FooterLeftContent() {
  const { setVisible } = useContext(GlobalContext);

  return (
    <div>
      <button onClick={() => setVisible(true)}>open modal</button>
    </div>
  );
}
